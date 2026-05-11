import { useInsert } from "@/service/useInsert"
import type { JuniorSignupData } from "../model/JuniorSignupData"

export const useJuniorSignup = () => {
  const insertHook = useInsert<JuniorSignupData>()

  return {
    ...insertHook,
    insert: (data: JuniorSignupData) =>
      insertHook.insert("signup-junior", data),
  }
}
