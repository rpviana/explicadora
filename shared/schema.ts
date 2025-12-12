import { z } from "zod";

export const contactMessageSchema = z.object({
  id: z.string(),
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido").optional(),
  phone: z.string().optional(),
  subject: z.string().min(2, "Assunto deve ter pelo menos 2 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  createdAt: z.date(),
});

export type ContactMessage = z.infer<typeof contactMessageSchema>;

export const insertContactMessageSchema = contactMessageSchema.omit({
  id: true,
  createdAt: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

// User types (kept for compatibility with storage interface, though unused)
export const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
});

export type User = z.infer<typeof userSchema>;
export type InsertUser = Omit<User, "id">;
