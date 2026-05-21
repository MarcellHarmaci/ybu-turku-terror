import { useInsert } from "@/service/useInsert"
import type { SignUpData } from "../model/SignupData"

export const useSignup = () => useInsert<SignUpData>("signup")
