import { useDocuments } from "@/firestore/useDocuments"
import { converter, type DbNewsItem } from "@/pages/admin/news/model/data"
import type { NewsItem } from "@/pages/admin/news/model/domain"
import { orderBy } from "firebase/firestore"

export const useNews = () =>
  useDocuments<NewsItem, DbNewsItem>(
    "news",
    converter,
    orderBy("timestamp", "desc")
  )
