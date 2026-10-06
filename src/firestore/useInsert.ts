import type { FirebaseError } from "firebase/app"
import { addDoc, collection, type DocumentData } from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebase"

export const useInsert = <T extends DocumentData>(collectionName: string) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string>()

  const reset = () => {
    setLoading(false)
    setSuccess(false)
    setError(undefined)
  }

  const insert = (data: T) => {
    reset()

    const collectionRef = collection(db, collectionName)

    setLoading(true)

    return addDoc(collectionRef, data)
      .then(() => {
        setSuccess(true)
        return true
      })
      .catch((reason: FirebaseError) => {
        setError(reason.message)
        console.error(reason)
        return false
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { insert, loading, success, error, reset }
}
