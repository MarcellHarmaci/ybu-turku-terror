import type { FirebaseError } from "firebase/app"
import { addDoc, collection, type DocumentData } from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebase"

export const useInsert = <T extends DocumentData>(collectionName: string) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string>()

  const insert = (data: T) => {
    const collectionRef = collection(db, collectionName)

    setLoading(true)

    addDoc(collectionRef, data)
      .then(() => {
        setSuccess(true)
      })
      .catch((reason: FirebaseError) => {
        setError(reason.message)
        console.error(reason)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { insert, loading, success, error }
}
