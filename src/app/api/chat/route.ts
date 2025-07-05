import { NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import "dotenv/config";

export const maxDuration = 30;
export async function POST(request: Request) {
  const { messages } = await request.json();

  const result = streamText({
    model: google("gemini-2.0-flash"),
    messages,
  });
  return result.toDataStreamResponse();
}
