import { GoogleGenerativeAI } from "@google/generative-ai";

const ERROR_MESSAGES = {
  apiError:
    "Desculpe, estou com dificuldades técnicas no momento. 😔 Por favor, contacte-nos diretamente via WhatsApp: +351 919 977 198",
  invalidInput: "Por favor, envie uma mensagem válida.",
  rateLimitExceeded: "Muitas mensagens num curto período. Por favor, aguarde um momento.",
};

const SYSTEM_INSTRUCTIONS = `Você é Diana, a assistente virtual do Centro de Explicações Diana Pimentel.

PERSONALIDADE:
- Amigável, profissional e prestativa
- Use apenas português de Portugal
- Seja concisa, clara e direta

OBJETIVO:
- Ajudar potenciais alunos e encarregados de educação a conhecer os serviços do centro
- Responder dúvidas sobre disciplinas, horários, preços e metodologia
- Incentivar marcações de aulas experimentais`;

const KNOWLEDGE_BASE = `
INFORMAÇÕES CENTRO DE EXPLICAÇÕES DIANA PIMENTEL:
- WhatsApp: +351 919 977 198
- Disciplinas: Língua Portuguesa, Matemática, Ciências e Biologia
- Níveis: 1.º Ciclo ao Secundário
- Para horários e preços, direcionar para WhatsApp.
`;

const apiKeys = [
  { key: process.env.GEMINI_API_KEY_1, model: "gemini-2.0-flash" },
  { key: process.env.GEMINI_API_KEY_2, model: "gemini-2.5-flash" },
  { key: process.env.GEMINI_API_KEY_3, model: "gemini-2.0-flash-lite" },
];

async function sendWithRetry(message: string, key: string, modelName: string, retries = 3, baseDelay = 1500) {
  const genAI = new GoogleGenerativeAI(key);
  const chatModel = genAI.getGenerativeModel({
    model: modelName,
    systemInstruction: `${SYSTEM_INSTRUCTIONS}\n\n${KNOWLEDGE_BASE}`,
  });
  const chat = chatModel.startChat({
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 500,
      topP: 0.9,
      topK: 40,
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
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  let body: any = {};
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  } catch {
    body = {};
  }
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message || message.length > 1000) {
    return res.status(400).json({ error: ERROR_MESSAGES.invalidInput });
  }

  const configured = apiKeys.filter((entry) => entry.key);
  if (!configured.length) {
    return res.status(500).json({ error: ERROR_MESSAGES.apiError });
  }

  let lastError: any = null;
  for (const { key, model } of configured) {
    try {
      const responseText = await sendWithRetry(message, key as string, model);
      return res.status(200).json({ response: responseText, timestamp: Date.now() });
    } catch (err: any) {
      lastError = err;
    }
  }

  const lastErrorMessage = String(lastError?.message || "");
  if (lastErrorMessage.toLowerCase().includes("quota") || lastErrorMessage.toLowerCase().includes("rate limit") || lastErrorMessage.toLowerCase().includes("429")) {
    return res.status(429).json({ error: ERROR_MESSAGES.rateLimitExceeded });
  }

  return res.status(503).json({
    error: ERROR_MESSAGES.apiError,
  });
}
