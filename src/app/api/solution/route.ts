import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const input = data.data;

  return NextResponse.json({ solution: input });
}
