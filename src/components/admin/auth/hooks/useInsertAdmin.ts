import { useFirestoreSave } from "@/service/useFirestoreSave"

interface Admin {
  approved: boolean
}

export const useInsertAdmin = () => {
  const hook = useFirestoreSave<Admin>("admins")

  const insert = (uid: string) => {
    hook.save(uid, { approved: false })
  }
  return { insert, loading: hook.loading, error: hook.error }
}
