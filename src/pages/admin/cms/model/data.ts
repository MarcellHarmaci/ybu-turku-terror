import {
  QueryDocumentSnapshot,
  type DocumentData,
  type FirestoreDataConverter,
} from "firebase/firestore"
import type { Page } from "./domain"

export interface DbPage extends DocumentData {
  title: string
}

export const converter: FirestoreDataConverter<Page, DbPage> = {
  fromFirestore: (snapshot: QueryDocumentSnapshot<DbPage, Page>) => ({
    ...snapshot.data(),
    id: snapshot.id,
  }),
  toFirestore: (model: Page) => ({
    ...model,
  }),
}
