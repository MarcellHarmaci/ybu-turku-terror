import { useInsert } from "@/service/useInsert"
import type { SignUpData } from "../model/SignupData"

export const useSignup = () => {
  const insertHook = useInsert<SignUpData>()

  return {
    ...insertHook,
    insert: (data: SignUpData) => insertHook.insert("signup", data),
  }
}
