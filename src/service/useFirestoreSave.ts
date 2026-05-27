import {
  doc,
  setDoc,
  type DocumentData,
  type FirestoreDataConverter,
} from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebase"

export const useFirestoreSave = <ModelType, DbModelType extends DocumentData>(
  collectionName: string,
  converter: FirestoreDataConverter<ModelType, DbModelType>
) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const reset = () => {
    setLoading(false)
    setSuccess(false)
    setError(false)
  }

  const save = (docId: string, data: ModelType) => {
    reset()
    const document = doc(db, collectionName, docId).withConverter(converter)

    setLoading(true)

    setDoc(document, data).then(
      () => {
        setLoading(false)
        setSuccess(true)
      },
      () => {
        console.error("Could not save data!")
        setLoading(false)
        setError(true)
      }
    )
  }

  return { save, loading, success, error, reset }
}
