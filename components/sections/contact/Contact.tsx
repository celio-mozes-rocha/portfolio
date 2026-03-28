"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "../../../lib/contact-schema";
import { useForm } from "react-hook-form";
import ContactForm from "./ContactForm";

export default function Contact() {

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

        <ContactForm />

        <p className="text-[clamp(0.75rem,2vw,1rem)] text-gray-400 leading-relaxed space-y-4 mt-4 max-w-md">
          <span>Vous avez une question ou un projet en tête ? Écrivez-moi ! </span><br />
          <span>Je reponds sous 24h à tous les messages.</span>
        </p>
      </motion.section>
    </>
  );
}
