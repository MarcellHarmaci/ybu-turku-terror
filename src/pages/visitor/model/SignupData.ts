import z from "zod"

export const signupSchema = z.object({
  contactPerson: z.string().min(3).max(100),
  contactEmail: z.email(),
  teamName: z
    .string()
    .min(3, "The team name must be at least 3 characters.")
    .max(32, "The team name must be at most 32 characters."),
})

export type SignUpData = z.infer<typeof signupSchema>
