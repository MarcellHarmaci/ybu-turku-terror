import type { FirebaseError } from "firebase/app"
import {
  doc,
  getDoc,
  type DocumentData,
  type FirestoreDataConverter,
} from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import type { ServiceHookConfig } from "./useDocument"

/**
 * Fetches a document a single time, without subscribing to updates.
 */
export const useDocumentOnce = <ModelType, DbModelType extends DocumentData>(
  collectionName: string,
  docId: string,
  converter: FirestoreDataConverter<ModelType, DbModelType>,
  config?: ServiceHookConfig
) => {
  // null means the document does not exist
  const [data, setData] = useState<ModelType | null>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (config?.skip) return

    setData(undefined)
    setError(undefined)

    const docRef = doc(db, collectionName, docId).withConverter(converter)
    getDoc(docRef)
      .then((docSnapshot) =>
        setData(docSnapshot.exists() ? docSnapshot.data() : null)
      )
      .catch((error: FirebaseError) => {
        console.error("Firestore getDoc error:", error)
        setError(error.message)
      })
  }, [collectionName, docId, config])

  return {
    isLoading: data === undefined && !error,
    notFound: data === null,
    data: data ?? undefined,
    error,
  }
}
