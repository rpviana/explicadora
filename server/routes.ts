import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { chatMessageSchema } from "@shared/chat-schema";
import { fromZodError } from "zod-validation-error";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { CHATBOT_CONFIG } from "./chatbot-config";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);

      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          error: "Dados inválidos",
          details: validationError.message
        });
      }

      const message = await storage.createContactMessage(result.data);

      return res.status(201).json({
        success: true,
        message: "Mensagem enviada com sucesso",
        id: message.id
      });
    } catch (error) {
      console.error("Error creating contact message:", error);
      return res.status(500).json({
        error: "Erro ao processar mensagem"
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({
        error: "Erro ao obter mensagens"
      });
    }
  });

  // Chat endpoint with Gemini AI - retry + fallback multi-API keys (correto)
  app.post("/api/chat", async (req, res) => {
    try {
      // Validação de input
      const result = chatMessageSchema.safeParse(req.body);
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          error: CHATBOT_CONFIG.errorMessages.invalidInput,
          details: validationError.message,
        });
      }

      const { message } = result.data;

      // Lista de API keys + modelos (fallback)
      const apiKeys = [
        { key: process.env.GEMINI_API_KEY_1, model: "gemini-2.0-flash" },
        { key: process.env.GEMINI_API_KEY_2, model: "gemini-2.5-flash" },
        { key: process.env.GEMINI_API_KEY_3, model: "gemini-pro-latest" },
      ];

      if (!apiKeys.some(k => k.key)) {
        console.error("Nenhuma GEMINI_API_KEY configurada");
        return res.status(500).json({ error: CHATBOT_CONFIG.errorMessages.apiError });
      }

      let lastError: any = null;

      // Função para enviar mensagem com retry + backoff
      const sendWithRetry = async (key: string, modelName: string, retries = 3, baseDelay = 2000) => {
        const genAI = new GoogleGenerativeAI(key);
        const chatModel = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: CHATBOT_CONFIG.systemInstructions + "\n\n" + CHATBOT_CONFIG.knowledgeBase,
        });
        const chat = chatModel.startChat({
          generationConfig: {
            temperature: CHATBOT_CONFIG.modelConfig.temperature,
            maxOutputTokens: CHATBOT_CONFIG.modelConfig.maxOutputTokens,
            topP: CHATBOT_CONFIG.modelConfig.topP,
            topK: CHATBOT_CONFIG.modelConfig.topK,
          },
        });

        for (let i = 0; i < retries; i++) {
          try {
            const result = await chat.sendMessage(message);
            return result.response.text();
          } catch (err: any) {
            if (err.status === 503) {
              const delay = baseDelay * Math.pow(2, i);
              console.warn(`Modelo ${modelName} sobrecarregado, tentando novamente em ${delay}ms... (${i + 1}/${retries})`);
              await new Promise(r => setTimeout(r, delay));
            } else {
              throw err; // outros erros propagam
            }
          }
        }
        throw new Error(`Modelo ${modelName} indisponível após múltiplas tentativas.`);
      };

      // Itera sobre cada chave/modelo até conseguir resposta
      for (const { key, model } of apiKeys) {
        if (!key) continue; // Ignora keys não configuradas
        try {
          const responseText = await sendWithRetry(key, model);
          return res.status(200).json({ response: responseText, timestamp: Date.now() });
        } catch (err: any) {
          lastError = err;
          console.warn(`Falha no modelo/key ${model}: ${err.message || err}`);
          // Continua para o próximo modelo
        }
      }

      // Se nenhum modelo funcionou
      console.error("Todos os modelos/API keys falharam:", lastError);
      return res.status(503).json({
        error: "Todos os modelos estão temporariamente indisponíveis. 😔 Por favor, tente novamente mais tarde ou contacte-nos via WhatsApp: +351 919 977 198",
      });

    } catch (error: any) {
      console.error("Erro no endpoint de chat:", error);

      if (error?.message?.includes("quota") || error?.message?.includes("rate limit")) {
        return res.status(429).json({ error: CHATBOT_CONFIG.errorMessages.rateLimitExceeded });
      }

      return res.status(500).json({ error: CHATBOT_CONFIG.errorMessages.apiError });
    }
  });


  return httpServer;
}
