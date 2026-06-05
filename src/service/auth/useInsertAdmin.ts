import { useSave } from "@/firestore/useSave"

interface Admin {
  approved: boolean
}

export const useInsertAdmin = () => {
  const hook = useSave<Admin>("admins")

  const insert = (uid: string) => {
    hook.save(uid, { approved: false })
  }
  return { insert, loading: hook.loading, error: hook.error }
}
