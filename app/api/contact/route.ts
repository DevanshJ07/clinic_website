import { NextResponse } from "next/server";
import { CLINIC } from "@/lib/data";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function trim(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { error: "Contact form is not configured. Please call us directly." },
      { status: 503 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = trim(body.name);
  const phone = trim(body.phone);
  const email = trim(body.email);
  const subject = trim(body.subject);
  const message = trim(body.message);

  if (!name || !phone || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const emailSubject =
    subject.length > 0
      ? `Medicare Website: ${subject}`
      : "Medicare Website: New enquiry";

  const formattedMessage = [
    "New enquiry from the Medicare website contact form.",
    "",
    `Full Name: ${name}`,
    `Phone Number: ${phone}`,
    `Email Address: ${email}`,
    subject.length > 0 ? `Subject: ${subject}` : null,
    "",
    "Message:",
    message,
    "",
    "— Reply directly to the sender's email address above.",
  ]
    .filter(Boolean)
    .join("\n");

  const web3Response = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: emailSubject,
      from_name: name,
      name,
      email,
      replyto: email,
      phone,
      message: formattedMessage,
    }),
  });

  const result = (await web3Response.json()) as {
    success?: boolean;
    message?: string;
  };

  if (!web3Response.ok || !result.success) {
    return NextResponse.json(
      {
        error:
          result.message ??
          "Unable to send your message. Please try again or call us directly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    recipient: CLINIC.contact.email,
  });
}
