import {
  doc,
  FirestoreError,
  onSnapshot,
  type DocumentData,
  type FirestoreDataConverter,
} from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

export interface ServiceHookConfig {
  skip: boolean
}

export const useDocument = <ModelType, DbModelType extends DocumentData>(
  collectionName: string,
  docId: string,
  converter: FirestoreDataConverter<ModelType, DbModelType>,
  config?: ServiceHookConfig
) => {
  const [data, setData] = useState<ModelType | undefined>()
  const [error, setError] = useState<string>()

  const docRef = doc(db, collectionName, docId).withConverter(converter)

  useEffect(() => {
    if (config?.skip) return

    const unsubscribe = onSnapshot(
      docRef,
      (docSnapshot) => setData(docSnapshot.data()),
      (error: FirestoreError) => {
        console.error("Firestore onSnapshot error:", error)
        setError(error.message)
      }
    )

    return unsubscribe
  }, [config])

  return { isLoading: data === undefined, data, error }
}
