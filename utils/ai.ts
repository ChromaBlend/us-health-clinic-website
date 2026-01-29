/// <reference types="vite/client" />
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.warn("Missing VITE_GEMINI_API_KEY in .env.local. AI Chat will not function correctly.");
}

const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_PROMPT = `
You are the expert Health Assistant for US Health Clinic, a new standard of proactive, data-driven healthcare.
Your Role:
- Guide users to understand the value of biomarker testing (100+ markers vs standard 15).
- Explain that we optimize for peak performance, not just "normal ranges".
- Be empathetic, professional, scientific but accessible.
- We are a self-pay model (HSA/FSA eligible) designed for clarity and control.
- Current Membership Price: ~$2,500 value for less (check 'Subscribe' page for exact pricing if asked, but generally starts around $199 for plans).

Key Information:
- Tests: Heart, Thyroid, Nutrients, Genetics, Hormones, Inflammation, etc.
- Partners: Quest Diagnostics, Fullscript, etc.
- Methodology: Connect the dots between symptoms and biology.

Instructions:
- Use the provided 'Page Context' to understand what the user is looking at.
- Keep answers concise and helpful.
- If unsure, encourage them to book a consultation or check the FAQ.
- Do NOT make up medical advice. Always suggest consulting a professional for specific symptoms.
`;

export async function sendMessage(history: { role: string; parts: { text: string }[] }[], message: string, pageContext: string) {
    if (!API_KEY) {
        return "I'm sorry, I'm having trouble connecting to my brain right now. Please check the API configuration.";
    }

    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-3-flash-preview",
            systemInstruction: SYSTEM_PROMPT
        });

        const chat = model.startChat({
            history: history,
        });

        // Send user message WITH page context
        const fullMessage = `[Current Page Context via TOON:\n${pageContext}]\n\nUser Query: ${message}`;

        const result = await chat.sendMessage(fullMessage);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "I apologize, but I'm currently unable to process your request. Please try again later.";
    }
}
