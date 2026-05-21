import { useFirebaseDocuments } from "@/service/useFirebaseDocuments"
import { orderBy } from "firebase/firestore"
import { converter, type DbNewsItem } from "../model/data"
import type { NewsItem } from "../model/domain"

export const useNews = () =>
  useFirebaseDocuments<NewsItem, DbNewsItem>(
    "news",
    converter,
    orderBy("timestamp", "desc")
  )
