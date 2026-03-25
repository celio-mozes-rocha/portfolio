import { z } from "zod"

export const contactSchema = z.object({
    name: z.string().min(3, "Nom trop court : trois caractères au moins sont exigés").max(25, "Saise limitée à 25 caractères"),
    email: z.email("Adresse email invalide").max(255, "Adrsse mail trop longue").optional().or(z.literal("")),
    message: z.string().min(10, "Message trop court : dix caractères au moins sont exigés").max(400, "Limitée à 400 caractères"),
    company: z.string().optional() // honeypot
})

export type ContactFormData = z.infer<typeof contactSchema>;
