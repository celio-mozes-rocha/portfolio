import rateLimit from "@/lib/rateLimit";
import { NextResponse } from "next/server";

export default function iprateLimit(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }
}
