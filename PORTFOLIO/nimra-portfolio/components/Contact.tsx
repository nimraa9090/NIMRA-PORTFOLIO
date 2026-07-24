"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-28 border-t border-stitch"
    >
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-14">
        <div>
          <span className="font-mono text-xs tracking-[0.2em] text-teal uppercase">
            Contact
          </span>
          <h2 className="font-display text-4xl text-paper mt-4 leading-tight">
            Let&apos;s build
            <br />
            something.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-xs text-muted uppercase tracking-wide mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full bg-transparent border border-stitch px-4 py-3 text-paper focus:outline-none focus:border-teal transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-mono text-xs text-muted uppercase tracking-wide mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-transparent border border-stitch px-4 py-3 text-paper focus:outline-none focus:border-teal transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-mono text-xs text-muted uppercase tracking-wide mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full bg-transparent border border-stitch px-4 py-3 text-paper focus:outline-none focus:border-teal transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="font-mono text-sm tracking-wide uppercase bg-paper text-ink px-6 py-3 hover:bg-teal transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p className="font-mono text-xs text-teal">
              Sent. I&apos;ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs text-thread">
              Something went wrong — please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
