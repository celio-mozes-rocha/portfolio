"use client";

import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      subject: "",
      message: "",
      company: "",
    }
  });

  const isDisabled = !isValid || loading;

  async function onSubmit(data: ContactFormData) {
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Merci. Votre message a été envoyé ✅");
        reset();
      } else {
        setStatus("Oups, un problème est survenu. Réessayez plus tard. ❌");
      }
    } catch (error) {
      setStatus("Oups, une erreur réseau est survenue ❌");

    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (status && isDirty) {
      setStatus("")
    }
  }, [isDirty]);

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
        <h1 className="text-2xl font-bold text-sky-400">Me contacter</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mt-10">
          <div className="mb-4 bg-slate-800">
            <input
              {...register("email")}
              placeholder="Email (obligatoire)"
              className="w-full border p-2 rounded placeholder:gray-400 bg-slate-800!"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 ml-1 transition-all duration-200 ease-in-out">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <select
              {...register("subject")}
              defaultValue=""
              className={`w-full border p-2 rounded ${watch("subject") === "" ? "text-gray-400" : "text-white"} bg-slate-800`}
            >
              <option className="text-gray-400" value="" disabled >
                Sélectionnez l'object
              </option>
              <option value="demande_projet">Demande de projet</option>
              <option value="question_projects">Question sur mes projects</option>
              <option value="collaboration">Collaboration</option>
              <option value="autre">Autre</option>
            </select>
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1 ml-1 transition-all duration-200 ease-in-out">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Message"
              className="w-full border p-2 rounded placeholder:gray-400"
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
            disabled={isDisabled}
            className={`relative px-4 py-2 bg-sky-500 rounded text-white flex items-center justify-center gap-2
              ${isDisabled
                ? "bg-sky-300 cursor-not-allowed"
                : "bg-sky-500 hover:bg-sky-600"} `}
          >
            <span className={loading ? "opacity-0" : "opacity-100"}>
              Envoyer
            </span>
            {loading && (
              <span className="absolute flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Envoi...
              </span>
            )}
            {/* {loading ? "Envoi..." : "Envoyer"} */}
          </button>

          {status && <p className="text-sm text-slate-400">{status}</p>}
        </form>

        <p className="text-[clamp(0.75rem,2vw,1rem)] text-gray-400 leading-relaxed space-y-4 mt-4 max-w-md">
          <span>Vous avez une question ou un projet en tête ? Écrivez-moi ! </span><br />
          <span>Je reponds sous 24h à tous les messages.</span>
        </p>
      </motion.section>
    </>
  );
}
