import { z } from "zod";

export const chatMessageSchema = z.object({
    message: z.string().min(1, "Mensagem não pode estar vazia").max(1000, "Mensagem muito longa"),
});

export const chatResponseSchema = z.object({
    response: z.string(),
    timestamp: z.number(),
});

export type ChatMessage = z.infer<typeof chatMessageSchema>;
export type ChatResponse = z.infer<typeof chatResponseSchema>;
