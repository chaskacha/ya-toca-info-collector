// app/api/transcribe/route.ts
import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: Request) {
    try {
        const form = await req.formData();
        const file = form.get("file");

        if (!(file instanceof Blob)) {
            return NextResponse.json({ error: "file missing" }, { status: 400 });
        }

        // The SDK accepts a File/Blob directly in Node API routes
        const tr = await openai.audio.transcriptions.create({
            model: "gpt-4o-transcribe",     // ← stable Whisper model
            file,                   // ← pass the Blob/File directly
            language: "es",         // optional hint
            temperature: 0,
        } as any);

        const text =
            (tr as any).text ??
            (tr as any)?.segments?.map((s: any) => s.text).join(" ") ??
            "";

        return NextResponse.json({ text });
    } catch (e: any) {
        console.error("transcribe error:", e?.response?.data || e?.message || e);
        return NextResponse.json({ error: "transcription_failed" }, { status: 500 });
    }
}
