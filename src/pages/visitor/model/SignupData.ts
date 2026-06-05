import z from "zod"

export const signupSchema = z.object({
  email: z.email(),
  teamName: z
    .string()
    .min(3, "The team name must be at least 3 characters.")
    .max(32, "The team name must be at most 32 characters."),
  playerCount: z.coerce.number<number>().min(5).max(20),
  levelOfPlay: z.enum(
    ["power-competitive", "power-regular", "lower-casual", "lower-beginner"],
    "Please select the level of play!"
  ),
  contactEmail: z.email(),
  contactPerson: z.string().min(3).max(100),
  contactPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Invalid phone number format.",
  }),
})

export type SignUpData = z.infer<typeof signupSchema>

export const levelOfPlayOptions = [
  {
    value: "power-competitive",
    label:
      "POWER pool - Competitive team (experienced ultimate players, routine attendace of competitive tournaments)",
  },
  {
    value: "power-regular",
    label:
      "POWER pool - Regular team ( players up to 4 years in the sport, extensive background in tournament play)",
  },
  {
    value: "lower-casual",
    label:
      "LOWER pool - Casual team ( players with up to 2 years in the sport, limited tournament experience as a team)",
  },
  {
    value: "lower-beginner",
    label:
      "LOWER pool - Casual team ( players with up to 2 years in the sport, limited tournament experience as a team)",
  },
]
