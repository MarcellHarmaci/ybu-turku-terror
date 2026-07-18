import { defaultConverterFactory } from "@/firestore/defaultConverterFactory"

export const urlConverter = defaultConverterFactory<{ value: string }>()
