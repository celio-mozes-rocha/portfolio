import { z } from "zod";

export const contactSchema = z.object({
  subject: z.string().min(1, "Merci de coisir un object"),
  email: z.email("Adresse email invalide").max(255, "Adresse mail trop longue"),
  message: z
    .string()
    .min(10, "Message trop court : dix caractères au moins sont exigés")
    .max(400, "Limitée à 400 caractères"),
  company: z.string().optional(), // honeypot
});

export type ContactFormData = z.infer<typeof contactSchema>;
