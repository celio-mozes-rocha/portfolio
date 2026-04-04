"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/contact-schema";
import { useForm } from "react-hook-form";
import { FormInput, FormSelect, FormTextarea, FormButton } from "@/components/form"

const SUBJECT_OPTIONS = [
  { value: "demande_projet", label: "Demande de projet" },
  { value: "question_projects", label: "Question sur mes projects" },
  { value: "collaboration", label: "Collaboration" },
  { value: "autre", label: "Autre" },
];

export default function ContactForm() {
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

  useEffect(() => {
    if (status && isDirty) {
      setStatus("")
    }
  }, [isDirty]);
  const isDisabled = !isValid || loading;
  const subjectValue = watch("subject");

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

  return (<>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mt-10">
      <FormInput
        placeholder="Email (obligatoire)"
        error={errors.email}
        disabled={loading}
        {...register("email")} />

      <FormSelect
        placeholder="Séléctionnez l'object"
        options={SUBJECT_OPTIONS}
        error={errors.subject}
        disabled={loading}
        watchValue={subjectValue}
        {...register("subject")}
      />

      <FormTextarea
        placeholder="Message"
        error={errors.message}
        disabled={loading}
        {...register("message")}
      />

      {/* honeypot */}
      <input type="text" {...register("company")} className="hidden" />

      <FormButton
        label="Envoyer"
        loading={loading}
        disabled={isDisabled}
        loadingLabel="Envoi..."
      />

      {status && <p className="text-[clamp(0.75rem,2vw,1rem)] text-gray-400 leading-relaxed space-y-4 mt-4 max-w-md">{status}</p>}
    </form>
  </>)
}