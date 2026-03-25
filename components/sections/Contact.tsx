"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "../../lib/contact-schema";
import { useForm } from "react-hook-form";

// Définir le type du formulaire
type ContactForm = HTMLFormElement & {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
  company: HTMLInputElement;
};

export default function Contact() {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactFormData) {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Message envoyé ✅");
      reset();
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
          <div className="mb-4">
            <input
              {...register("name")}
              placeholder="Nom"
              className="w-full border p-2 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 ml-1 transition-all duration-200 ease-in-out">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <input
              {...register("email")}
              placeholder="Email (optionnel)"
              className="w-full border p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 ml-1 transition-all duration-200 ease-in-out">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Message"
              className="w-full border p-2 rounded"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1 ml-1 transition-all duration-200 ease-in-out">
                {errors.message.message}
              </p>
            )}
          </div>
          {/* honeypot */}
          <input type="text" {...register("company")} className="hidden" />

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
