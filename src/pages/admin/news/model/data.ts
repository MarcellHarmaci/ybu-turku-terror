import {
  Timestamp,
  type DocumentData,
  type FirestoreDataConverter,
  type QueryDocumentSnapshot,
} from "firebase/firestore"
import type { NewsItem } from "./domain"

export interface DbNewsItem extends DocumentData {
  title: string
  content: string
  timestamp: Timestamp
}

export const converter: FirestoreDataConverter<NewsItem, DbNewsItem> = {
  fromFirestore: (snapshot: QueryDocumentSnapshot<DbNewsItem, NewsItem>) => ({
    ...snapshot.data(),
    id: snapshot.id,
    timestamp: snapshot.data().timestamp.toDate(),
  }),
  toFirestore: (model: NewsItem) => ({
    ...model,
    timestamp: Timestamp.fromDate(model.timestamp),
  }),
}
