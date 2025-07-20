import { z } from "zod"

const userSchema = z.object({
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
  })
})
 
export const registerSchema = userSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
  password: true,
})

export type RegisterSchema = z.infer<typeof registerSchema>

export const loginSchema = userSchema.pick({
  email: true,
  password: true,
})

export type LoginSchema = z.infer<typeof loginSchema>

export const updateUserSchema = userSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
})

export type UpdateUserSchema = z.infer<typeof updateUserSchema>


export const updatePasswordSchema = userSchema.pick({
  password: true,
}).extend({
  newPassword: z.string({
    required_error: "new password is required.",
  }).min(6, {
    message: "New Password must be at least 6 characters.",
  }),
  confirmPassword: z.string({
    required_error: "new password is required.",
  }).min(6, {
    message: "Confirmation Password must be at least 6 characters.",
  }),
}).refine((values) => values.newPassword === values.confirmPassword, {
  message: 'Password don\'t match',
  path: ['confirmPassword']
})

export type UpdatePasswordSchema = z.infer<typeof updatePasswordSchema>


