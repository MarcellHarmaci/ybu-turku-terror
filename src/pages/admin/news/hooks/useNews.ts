import { useFirebaseDocuments } from "@/service/useFirebaseDocuments"
import { converter, type DbNewsItem } from "../model/data"
import type { NewsItem } from "../model/domain"

export const useNews = () =>
  useFirebaseDocuments<NewsItem, DbNewsItem>("news", converter)
