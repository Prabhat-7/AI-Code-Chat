import { NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import "dotenv/config";

export async function POST(request: Request) {
  const data = await request.json();
  const input = data.data;

  const { text } = await generateText({
    model: google("gemini-2.0-flash"),
    prompt: input,
  });
  return NextResponse.json({ solution: text });
}
