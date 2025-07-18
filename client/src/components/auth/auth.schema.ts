import { z } from "zod"

export const authSchema = z.object({
  firstName: z.string({
    required_error: "firstName is required.",
  }).min(2, {
    message: "firstName must be at least 2 characters.",
  }),
  lastName: z.string({
    required_error: "lastName is required.",
  }).min(2, {
    message: "firstName must be at least 2 characters.",
  }),
  email: z.string({
    required_error: "Email is required.",
  }).email({
    message: "Invalid email address.",
  }),
  password: z.string({
    required_error: "Password is required.",
  }).min(6, {
    message: "Password must be at least 6 characters.",
  }),
})
 
export const registerSchema = authSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
  password: true,
})

export type RegisterSchema = z.infer<typeof registerSchema>

export const loginSchema = authSchema.pick({
  email: true,
  password: true,
})

export type LoginSchema = z.infer<typeof loginSchema>