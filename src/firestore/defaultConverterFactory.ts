import type {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
} from "firebase/firestore"

export const defaultConverterFactory = <T extends DocumentData>() => {
  const converter: FirestoreDataConverter<T, T> = {
    fromFirestore: (snapshot: QueryDocumentSnapshot<T, T>) => snapshot.data(),
    toFirestore: (model: T) => model,
  }
  return converter
}
