import { google } from "@ai-sdk/google";
import { smoothStream, streamText } from "ai";
import "dotenv/config";

export const maxDuration = 30;
export async function POST(request: Request) {
  const { messages } = await request.json();

  const result = streamText({
    model: google("gemini-2.0-flash"),
    messages,
    experimental_transform: smoothStream({
      delayInMs: 20,
      chunking: "word",
    }),
  });
  return result.toDataStreamResponse();
}
