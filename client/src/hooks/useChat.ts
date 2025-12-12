import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import type { ChatMessage, ChatResponse } from "@shared/chat-schema";

interface Message {
    id: string;
    text: string;
    isBot: boolean;
    timestamp: number;
}

export function useChat() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            text: "Olá! 👋 Sou a Diana, assistente virtual do Centro de Explicações Diana Pimentel. Como posso ajudar hoje?",
            isBot: true,
            timestamp: Date.now(),
        },
    ]);

    const sendMessageMutation = useMutation({
        mutationFn: async (message: string): Promise<ChatResponse> => {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message } as ChatMessage),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || "Erro ao enviar mensagem");
            }

            return response.json();
        },
        onMutate: async (message: string) => {
            // Add user message immediately
            const userMessage: Message = {
                id: `user-${Date.now()}`,
                text: message,
                isBot: false,
                timestamp: Date.now(),
            };
            setMessages((prev) => [...prev, userMessage]);
        },
        onSuccess: (data) => {
            // Add bot response
            const botMessage: Message = {
                id: `bot-${data.timestamp}`,
                text: data.response,
                isBot: true,
                timestamp: data.timestamp,
            };
            setMessages((prev) => [...prev, botMessage]);
        },
        onError: (error: Error) => {
            // Add error message
            const errorMessage: Message = {
                id: `error-${Date.now()}`,
                text: error.message,
                isBot: true,
                timestamp: Date.now(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        },
    });

    const sendMessage = (message: string) => {
        if (message.trim()) {
            sendMessageMutation.mutate(message);
        }
    };

    return {
        messages,
        sendMessage,
        isLoading: sendMessageMutation.isPending,
    };
}
