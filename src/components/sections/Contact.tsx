"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { FacebookIcon, LinkedinIcon, YoutubeIcon, WhatsappIcon } from "../ui/BrandIcons";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { PERSONAL, PROJECT_TYPES } from "@/lib/data";

type FormState = "idle" | "submitting" | "success";

const CONTACT_LINKS = [
  { label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}`, icon: Mail },
  { label: "WhatsApp", value: "Chat on WhatsApp", href: PERSONAL.whatsapp, icon: WhatsappIcon },
  { label: "Facebook", value: "@jobayerhossan", href: PERSONAL.facebook, icon: FacebookIcon },
  { label: "LinkedIn", value: "/in/jobayerhossan", href: PERSONAL.linkedin, icon: LinkedinIcon },
  { label: "Behance", value: "/jobayerhossan", href: PERSONAL.behance, icon: Send },
  { label: "YouTube", value: "@jobayerhossan", href: PERSONAL.youtube, icon: YoutubeIcon },
];

export default function Contact() {
  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Wire this up to your email/CRM endpoint of choice (Resend, Formspree, etc).
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Have a project in mind? Let's cut it together."
          description="Tell me a bit about your project and I'll get back to you within 24 hours."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <Reveal direction="right" className="flex flex-col gap-4">
            {CONTACT_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass glass-hover group flex items-center gap-4 rounded-2xl p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15 text-cyan transition-colors group-hover:text-white">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-text-tertiary">{link.label}</p>
                    <p className="text-sm font-medium text-white">{link.value}</p>
                  </div>
                </a>
              );
            })}
          </Reveal>

          <Reveal direction="left">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-7 sm:p-9">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-full min-h-[360px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 size={44} className="mb-4 text-cyan" />
                  <h3 className="font-display text-xl font-semibold text-white">
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-text-secondary">
                    Thanks for reaching out — I&apos;ll reply to your project within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-cyan hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <div className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <Field label="Project Type" htmlFor="projectType">
                    <select id="projectType" name="projectType" required className="form-input" defaultValue="">
                      <option value="" disabled>
                        Select a project type
                      </option>
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="form-input resize-none"
                    />
                  </Field>

                  <Button type="submit" className="mt-1 w-full justify-center">
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin" /> Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send size={15} />
                      </span>
                    )}
                  </Button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          padding: 0.7rem 1rem;
          font-size: 0.875rem;
          color: white;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .form-input::placeholder { color: #6b7280; }
        .form-input:focus {
          outline: none;
          border-color: var(--color-cyan);
          background: rgba(255,255,255,0.05);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-xs font-medium text-text-secondary">
        {label}
      </label>
      {children}
    </div>
  );
}
