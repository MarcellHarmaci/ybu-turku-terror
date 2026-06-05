import z from "zod"

export const schema = z.object({
  email: z.email(),
  password: z.string().min(8).max(200),
})

export type LoginFormData = z.infer<typeof schema>
