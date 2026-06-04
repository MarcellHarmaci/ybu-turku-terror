import {
  collection,
  FirestoreError,
  onSnapshot,
  query,
  QueryConstraint,
  type DocumentData,
  type FirestoreDataConverter,
} from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

export const useDocuments = <ModelType, DbModelType extends DocumentData>(
  collectionName: string,
  converter: FirestoreDataConverter<ModelType, DbModelType>,
  ...queryConstraints: QueryConstraint[]
) => {
  const [data, setData] = useState<ModelType[]>()
  const [error, setError] = useState<string>()

  const collectionRef = collection(db, collectionName).withConverter(converter)
  const q = query(collectionRef, ...queryConstraints)

  useEffect(() => {
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => setData(querySnapshot.docs.map((doc) => doc.data())),
      (error: FirestoreError) => {
        console.error("Firestore onSnapshot error:", error)
        setError(error.message)
      }
    )

    return unsubscribe
  }, [])

  return { isLoading: data === undefined, data, error }
}
