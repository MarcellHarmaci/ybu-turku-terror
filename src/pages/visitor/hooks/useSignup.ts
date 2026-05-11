import { useSave } from "@/service/useSave"
import type { SignUpData } from "../model/SignupData"

export const useSignup = () => {
  const saveHook = useSave<SignUpData>()

  return {
    ...saveHook,
    save: (data: SignUpData) =>
      saveHook.save(
        "signup",
        data.teamName.toLowerCase().replaceAll(" ", "-"),
        data
      ),
  }
}
