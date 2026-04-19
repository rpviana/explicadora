import { GoogleGenerativeAI } from "@google/generative-ai";
import { chatMessageSchema } from "../shared/chat-schema";
import { fromZodError } from "zod-validation-error";
import { CHATBOT_CONFIG } from "../server/chatbot-config";

const apiKeys = [
  { key: process.env.GEMINI_API_KEY_1, model: "gemini-2.0-flash" },
  { key: process.env.GEMINI_API_KEY_2, model: "gemini-2.5-flash" },
  { key: process.env.GEMINI_API_KEY_3, model: "gemini-2.0-flash-lite" },
];

async function sendWithRetry(message: string, key: string, modelName: string, retries = 3, baseDelay = 1500) {
  const genAI = new GoogleGenerativeAI(key);
  const chatModel = genAI.getGenerativeModel({
    model: modelName,
    systemInstruction: `${CHATBOT_CONFIG.systemInstructions}\n\n${CHATBOT_CONFIG.knowledgeBase}`,
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
      const status = err?.status ?? err?.response?.status;
      if (status === 503) {
        const delay = baseDelay * Math.pow(2, i);
        await new Promise((r) => setTimeout(r, delay));
        continue;
      }
      throw err;
    }
  }

  throw new Error(`Modelo ${modelName} indisponível após múltiplas tentativas.`);
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const result = chatMessageSchema.safeParse(req.body);
  if (!result.success) {
    const validationError = fromZodError(result.error);
    return res.status(400).json({
      error: CHATBOT_CONFIG.errorMessages.invalidInput,
      details: validationError.message,
    });
  }

  const configured = apiKeys.filter((entry) => entry.key);
  if (!configured.length) {
    return res.status(500).json({ error: CHATBOT_CONFIG.errorMessages.apiError });
  }

  let lastError: any = null;
  for (const { key, model } of configured) {
    try {
      const responseText = await sendWithRetry(result.data.message, key as string, model);
      return res.status(200).json({ response: responseText, timestamp: Date.now() });
    } catch (err: any) {
      lastError = err;
    }
  }

  const message = String(lastError?.message || "");
  if (message.toLowerCase().includes("quota") || message.toLowerCase().includes("rate limit")) {
    return res.status(429).json({ error: CHATBOT_CONFIG.errorMessages.rateLimitExceeded });
  }

  return res.status(503).json({
    error:
      "Todos os modelos estão temporariamente indisponíveis. 😔 Por favor, tente novamente mais tarde ou contacte-nos via WhatsApp: +351 919 977 198",
  });
}
