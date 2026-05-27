import { useFirestoreSave } from "@/service/useFirestoreSave"
import { converter, type DbNewsItem } from "../model/data"
import type { NewsItem } from "../model/domain"

export const useSaveNews = () =>
  useFirestoreSave<NewsItem, DbNewsItem>("news", converter)
