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

    deleteDoc(docRef)
      .then(
        () => {
          setLoading(false)
          setSuccess(true)
        },
        (reason: FirebaseError) => {
          console.error("Could not insert data!", reason)
          setLoading(false)
          setError(reason.message)
        }
      )
      .catch((reason) => {
        console.error("Could not insert data!", reason)
        setLoading(false)
        setError(reason)
      })
  }

  return { del: deleteFunc, loading, success, error }
}
