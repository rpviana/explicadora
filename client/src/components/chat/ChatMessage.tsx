import { motion, AnimatePresence } from "framer-motion";

interface ChatMessageProps {
    text: string;
    isBot: boolean;
    timestamp: number;
}

export function ChatMessage({ text, isBot, timestamp }: ChatMessageProps) {
    const formattedTime = new Date(timestamp).toLocaleTimeString("pt-PT", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex gap-3 ${isBot ? "justify-start" : "justify-end"}`}
        >
            {isBot && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    D
                </div>
            )}

            <div className={`flex flex-col ${isBot ? "items-start" : "items-end"} max-w-[75%]`}>
                <div
                    className={`rounded-2xl px-4 py-2.5 ${isBot
                            ? "bg-muted text-foreground rounded-tl-none"
                            : "bg-primary text-primary-foreground rounded-tr-none"
                        }`}
                >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                        {text}
                    </p>
                </div>
                <span className="text-xs text-muted-foreground mt-1 px-1">
                    {formattedTime}
                </span>
            </div>

            {!isBot && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-semibold">
                    V
                </div>
            )}
        </motion.div>
    );
}
