import { useInsert } from "@/service/useInsert"
import type { JuniorSignupData } from "../model/JuniorSignupData"

export const useJuniorSignup = () =>
  useInsert<JuniorSignupData>("signup-junior")
