import { useDocument } from "@/firestore/useDocument"
import { urlConverter } from "./converter"

export const useUrl = () => {
  const docHook = useDocument("url", "standings", urlConverter)

  return {
    isLoading: docHook.isLoading,
    error: docHook.error,
    url: docHook.data?.value,
  }
}
