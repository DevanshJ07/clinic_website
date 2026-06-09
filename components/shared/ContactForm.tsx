"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    // Simulate async submit — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-14 text-center">
        <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-clinic-green" />
        </div>
        <div className="flex flex-col gap-2">
          <h3
            className="text-lg font-bold text-clinic-navy"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Message Sent
          </h3>
          <p className="text-sm text-clinic-gray max-w-sm">
            Thank you for reaching out. Our team will get back to you as soon
            as possible during clinic hours.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="text-xs text-clinic-blue hover:underline mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-clinic-navy">
            Full Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            required
            className="h-10 rounded-lg border-border focus-visible:border-clinic-blue focus-visible:ring-clinic-blue/20 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold text-clinic-navy">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            required
            className="h-10 rounded-lg border-border focus-visible:border-clinic-blue focus-visible:ring-clinic-blue/20 text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold text-clinic-navy">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com (optional)"
          className="h-10 rounded-lg border-border focus-visible:border-clinic-blue focus-visible:ring-clinic-blue/20 text-sm"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-semibold text-clinic-navy">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="e.g. Appointment enquiry, Test report, General question…"
          className="h-10 rounded-lg border-border focus-visible:border-clinic-blue focus-visible:ring-clinic-blue/20 text-sm"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-clinic-navy">
          Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us how we can help you…"
          required
          rows={5}
          className="rounded-lg border-border focus-visible:border-clinic-blue focus-visible:ring-clinic-blue/20 text-sm resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={state === "submitting"}
        className="bg-clinic-blue hover:bg-clinic-navy text-white h-11 rounded-xl text-sm font-semibold shadow-sm transition-all duration-200 disabled:opacity-70"
      >
        {state === "submitting" ? (
          <>
            <span className="w-4 h-4 mr-2 rounded-full border-2 border-white/30 border-t-white animate-spin inline-block" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-xs text-clinic-gray text-center">
        For urgent matters, please call us directly during clinic hours.
      </p>
    </form>
  );
}
