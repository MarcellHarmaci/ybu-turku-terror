import {
  type DocumentData,
  type FirestoreDataConverter,
} from "firebase/firestore"
import { useDocuments } from "./useDocuments"

export const useDocumentsField = <ModelType, DbModelType extends DocumentData>(
  collectionName: string,
  converter: FirestoreDataConverter<ModelType, DbModelType>,
  fieldName: keyof ModelType
) => {
  const documentsHook = useDocuments<ModelType, DbModelType>(
    collectionName,
    converter
  )

  return {
    ...documentsHook,
    data: documentsHook.data?.map((item) => item[fieldName]),
  }
}
