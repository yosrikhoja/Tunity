"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const { dict } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const nextErrors: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) nextErrors.name = dict.contactForm.errorName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = dict.contactForm.errorEmail;
    if (!message) nextErrors.message = dict.contactForm.errorMessage;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-surface flex flex-col items-center justify-center gap-4 p-12 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-electric-50 text-electric-600">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="font-display text-xl font-semibold text-navy-900">
          {dict.contactForm.successTitle}
        </h3>
        <p className="max-w-sm text-sm text-navy-600">{dict.contactForm.successText}</p>
        <button onClick={() => setStatus("idle")} className="btn-secondary mt-2">
          {dict.contactForm.sendAnother}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card-surface space-y-5 p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-800">
            {dict.contactForm.fullName}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={dict.contactForm.fullNamePlaceholder}
            className="w-full rounded-xl border border-navy-100 bg-navy-50/50 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-electric-400 focus:bg-white"
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-800">
            {dict.contactForm.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={dict.contactForm.emailPlaceholder}
            className="w-full rounded-xl border border-navy-100 bg-navy-50/50 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-electric-400 focus:bg-white"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy-800">
            {dict.contactForm.company} <span className="text-navy-400">{dict.contactForm.optional}</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder={dict.contactForm.companyPlaceholder}
            className="w-full rounded-xl border border-navy-100 bg-navy-50/50 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-electric-400 focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy-800">
            {dict.contactForm.service}
          </label>
          <select
            id="service"
            name="service"
            defaultValue={dict.contactForm.services[0]}
            className="w-full rounded-xl border border-navy-100 bg-navy-50/50 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-electric-400 focus:bg-white"
          >
            {dict.contactForm.services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
          {dict.contactForm.projectDetails}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={dict.contactForm.projectDetailsPlaceholder}
          className="w-full resize-none rounded-xl border border-navy-100 bg-navy-50/50 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-electric-400 focus:bg-white"
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {dict.contactForm.sending}
          </>
        ) : (
          <>
            {dict.contactForm.send}
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
