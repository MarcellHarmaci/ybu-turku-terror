import z from "zod"

export const juniorSignupSchema = z.object({
  email: z.email(),
  playerType: z.enum(["team", "single"], "Please select one!"),
  teamOrPlayerName: z.string().min(3).max(100),
  contactPerson: z.string().min(3).max(100),
  contactEmail: z.email().optional().nullable(),
  contactPhone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Invalid phone number format.",
    })
    .optional()
    .nullable(),
  comment: z.string().max(500).optional().nullable(),
})

export type JuniorSignupData = z.infer<typeof juniorSignupSchema>

export const playerType = [
  {
    value: "team",
    label: "Joukkue",
  },
  {
    value: "single",
    label: "Yksittäinen pelaaja",
  },
]
