import { z } from "zod";

export const contactsSchema = z.object({
  name: z.string().min(1, "Full name is required.").max(255),
  email: z
    .string()
    .min(1, "Email address is required.")
    .email("Email address is invalid.")
    .max(255),
  body: z
    .string()
    .min(1, "The message is required.")
    .max(1000, "Your message is a bit long, isnt it? Use at most 1000 chars."),
});

export type ContactsSchemaInput = z.TypeOf<typeof contactsSchema>;
