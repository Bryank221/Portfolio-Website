"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { SOCIAL_LINKS } from "@/data/nav";

const CONNECT_LINKS = [
  { label: "GitHub", href: SOCIAL_LINKS.github },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "Email", href: `mailto:${SOCIAL_LINKS.email}` },
  { label: "Resume", href: SOCIAL_LINKS.resume },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your site"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Ready to build
            <br />
            something?
          </motion.h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
            Let&apos;s turn an idea into something that works.
          </p>

          <div className="mt-12">
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-dim">
              LET&apos;S CONNECT
            </p>
            <div className="flex flex-wrap gap-3">
              {CONNECT_LINKS.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="border border-border px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span
                    key={link.label}
                    title="Link coming soon"
                    className="cursor-not-allowed border border-border px-4 py-2 font-mono text-xs text-muted-dim opacity-50"
                  >
                    {link.label}
                  </span>
                )
              )}
            </div>
          </div>

          <TerminalReadout />
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-border bg-surface p-6 sm:p-8"
        >
          <Field
            label="NAME"
            value={form.name}
            onChange={(v) => setForm((f) => ({ ...f, name: v }))}
            placeholder="Your name"
          />
          <Field
            label="EMAIL"
            type="email"
            value={form.email}
            onChange={(v) => setForm((f) => ({ ...f, email: v }))}
            placeholder="your.email@example.com"
          />
          <div className="mb-6">
            <label className="mb-2 block font-mono text-[11px] tracking-[0.15em] text-muted-dim">
              MESSAGE
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="Tell me about your project..."
              className="w-full resize-none border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-dim focus:border-accent focus:outline-none"
            />
          </div>

          <MagneticButton
            as="button"
            type="submit"
            className="inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-xs font-semibold tracking-wide text-[#04100e]"
          >
            SEND TRANSMISSION
            <span aria-hidden>→</span>
          </MagneticButton>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="mb-6">
      <label className="mb-2 block font-mono text-[11px] tracking-[0.15em] text-muted-dim">
        {label}
      </label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-dim focus:border-accent focus:outline-none"
      />
    </div>
  );
}

function TerminalReadout() {
  return (
    <div className="mt-10 border border-border bg-background p-4 font-mono text-[11px] leading-relaxed text-muted-dim">
      <p>&gt; INITIALIZING CONNECTION...</p>
      <p>&gt; STATUS: READY</p>
      <p>&gt; AWAITING MESSAGE...</p>
      <p className="animate-blink text-accent">_</p>
    </div>
  );
}
