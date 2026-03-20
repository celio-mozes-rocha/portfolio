"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Définir le type du formulaire
type ContactForm = HTMLFormElement & {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
  company: HTMLInputElement;
};

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault();

    const form = event.currentTarget as ContactForm;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      company: form.company.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Message envoyé ✅");
      form.reset();
    } else {
      setStatus("Erreur lors de l'envoi ❌");
    }
  }

  return (
    <>
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="min-h-screenb scroll-mt-24 flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-sky-400">Me contacter</h2>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            name="name"
            placeholder="Nom"
            required
            className="w-full border p-2 rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Email (optionnel)"
            required
            className="w-full border p-2 rounded"
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            required
            className="w-full border p-2 rounded"
          />

          {/* honeypot */}
          <input type="text" name="company" className="hidden" />

          <button
            type="submit"
            className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
          >
            Envoyer
          </button>

          {status && <p className="text-sm text-slate-400">{status}</p>}
        </form>
      </motion.section>
    </>
  );
}
