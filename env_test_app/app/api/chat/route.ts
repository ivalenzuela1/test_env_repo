import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    // Modify the message if needed
    const modifiedPrompt = `You said: ${message}`;

    const result = await model.generateContent(modifiedPrompt);
    const response = await result.response;
    const text = await response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Error generating content:", error);
    return NextResponse.json(
      { reply: "Sorry, I couldn't process your request." },
      { status: 500 }
    );
  }
}
