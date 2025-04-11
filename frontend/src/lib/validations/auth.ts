import * as z from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  fullName: z.string().optional(),
});

export type SignUpInputs = z.infer<typeof signUpSchema>;
export type LoginInputs = z.infer<typeof loginSchema>;
