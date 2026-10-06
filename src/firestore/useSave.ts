import type { FirebaseError } from "firebase/app"
import {
  doc,
  setDoc,
  type DocumentData,
  type FirestoreDataConverter,
} from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebase"

export const useSave = <
  ModelType extends DocumentData,
  DbModelType extends DocumentData = ModelType,
>(
  collectionName: string,
  converter?: FirestoreDataConverter<ModelType, DbModelType>
) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string>()

  const reset = () => {
    setLoading(false)
    setSuccess(false)
    setError(undefined)
  }

  const save = (docId: string, data: ModelType) => {
    reset()

    let document = doc(db, collectionName, docId)
    if (converter) {
      document = document.withConverter(converter)
    }

    setLoading(true)

    return setDoc(document, data)
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

  return { save, loading, success, error, reset }
}
