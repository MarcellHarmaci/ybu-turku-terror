import type { FirebaseError } from "firebase/app"
import { collection, deleteDoc, doc } from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebase"

export interface DeleteOperation {
  delete: (docId: string, ...pathSegments: string[]) => void
  loading: boolean
  success: boolean
  error?: string
}

export const useDelete = (collectionName: string) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string>()

  const collectionRef = collection(db, collectionName)
  const deleteFunc = (docId: string, ...pathSegments: string[]) => {
    const docRef = doc(collectionRef, docId, ...pathSegments)

    setLoading(true)
    setError(undefined)

    deleteDoc(docRef)
      .then(() => setSuccess(true))
      .catch((reason: FirebaseError) => {
        setError(reason.message)
        console.error(reason)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { del: deleteFunc, loading, success, error }
}
