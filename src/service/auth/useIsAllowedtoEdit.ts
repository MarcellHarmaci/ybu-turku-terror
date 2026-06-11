import { defaultConverterFactory } from "@/firestore/defaultConverterFactory"
import { useDocument } from "@/firestore/useDocument"
import { useMemo } from "react"

export const useIsAllowedtoEdit = (uid?: string) => {
  const converter = defaultConverterFactory<{ approved: boolean }>()
  // memoize the subscription config to prevent unnecessary resubscribtions
  const config = useMemo(() => ({ skip: !uid }), [uid])

  const docHook = useDocument(
    "admins",
    uid ?? "unauthorized",
    converter,
    config
  )

  return {
    isLoading: docHook.isLoading,
    error: docHook.error,
    isAllowedToEdit: docHook.data?.approved ?? false,
  }
}
