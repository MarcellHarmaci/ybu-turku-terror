import { useSave } from "@/firestore/useSave"
import { urlConverter } from "./converter"

export const useSaveUrl = () => {
  const hook = useSave<{ value: string }>("url", urlConverter)

  return {
    ...hook,
    save: (url: string) => hook.save("standings", { value: url }),
  }
}
