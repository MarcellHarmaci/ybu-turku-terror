import { useInsert } from "@/firestore/useInsert"
import type { JuniorSignupData } from "@/pages/visitor/model/JuniorSignupData"

export const useJuniorSignup = () =>
  useInsert<JuniorSignupData>("signup-junior")
