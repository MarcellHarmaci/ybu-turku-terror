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

  return { insert, loading, success, error }
}
