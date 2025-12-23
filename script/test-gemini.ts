import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY_1 || process.env.GEMINI_API_KEY_2 || process.env.GEMINI_API_KEY_3;

if (!apiKey) {
    console.error("No API keys found in environment variables.");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function run() {
    try {
        console.log("Using API Key (last 4 chars):", apiKey.slice(-4));

        // Use fetch to list models directly
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);

        if (!response.ok) {
            throw new Error(`Failed to list models: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const models = data.models || [];

        console.log("Available models:");
        models.forEach((m: any) => console.log(`- ${m.name}`));

    } catch (error: any) {
        console.error("Error testing model:", error.message);
    }
}

run();
