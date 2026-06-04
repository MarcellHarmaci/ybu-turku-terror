import { useInsert } from "@/firestore/useInsert"
import type { SignUpData } from "@/pages/visitor/model/SignupData"

export const useSignup = () => useInsert<SignUpData>("signup")
