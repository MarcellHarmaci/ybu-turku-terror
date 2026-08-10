import { useDocument } from "@/firestore/useDocument"
import { urlConverter } from "./converter"

export const useUrl = (urlId: string) => {
  const docHook = useDocument("url", urlId, urlConverter)

  return {
    isLoading: docHook.isLoading,
    error: docHook.error,
    url: docHook.data?.value,
  }
}
