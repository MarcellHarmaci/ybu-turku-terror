import { useFirebaseDocuments } from "@/service/useFirebaseDocuments"
import { Timestamp, type QueryDocumentSnapshot } from "firebase/firestore"
import type { DbNewsItem } from "../model/data"
import type { NewsItem } from "../model/domain"

export const useNews = () =>
  useFirebaseDocuments<NewsItem, DbNewsItem>("news", {
    fromFirestore: (snapshot: QueryDocumentSnapshot<DbNewsItem, NewsItem>) => ({
      ...snapshot.data(),
      id: snapshot.id,
      timestamp: snapshot.data().timestamp.toDate(),
    }),
    toFirestore: (model: NewsItem) => ({
      ...model,
      timestamp: Timestamp.fromDate(model.timestamp),
    }),
  })
