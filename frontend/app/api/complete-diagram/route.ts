import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt, image_data } = await req.json();

    if (!image_data) {
      console.error("API Error: No image_data received from frontend.");
      return NextResponse.json(
        { error: "No drawing detected. Please draw something first." },
        { status: 400 } // Bad Request
      );
    }

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // 1. Use the Text Model (Free & Stable)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // 2. The Prompt: Ask for CODE, not an image
    const promptText = `
      You are an expert software architect.
      Analyze the provided sketch and description: "${prompt}".
      
      Output the Mermaid.js code to recreate this flow chart.
      - Use 'graph TD' for flowcharts.
      - Use 'sequenceDiagram' for interaction flows.
      - Keep labels short and professional.
      
      IMPORTANT: Return ONLY the code. Do not wrap it in markdown block quotes.
    `;

    // 3. Clean the image data
    const base64Data = image_data.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");

    const result = await model.generateContent([
      promptText,
      {
        inlineData: {
          data: base64Data,
          mimeType: "image/png",
        },
      },
    ]);

    const response = await result.response;
    const text = response.text();
    
    // 4. Extra Safety: Remove markdown formatting if Gemini adds it
    const cleanCode = text.replace(/```mermaid/g, "").replace(/```/g, "").trim();

    return NextResponse.json({ result: cleanCode });

  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" }, 
      { status: 500 }
    );
  }
}