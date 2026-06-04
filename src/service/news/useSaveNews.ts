import { useSave } from "@/firestore/useSave"
import { converter, type DbNewsItem } from "@/pages/admin/news/model/data"
import type { NewsItem } from "@/pages/admin/news/model/domain"

export const useSaveNews = () =>
  useSave<NewsItem, DbNewsItem>("news", converter)
