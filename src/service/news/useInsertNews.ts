import { useInsert } from "@/firestore/useInsert"
import type { NewsItem } from "@/pages/admin/news/model/domain"

export const useInsertNews = () => useInsert<NewsItem>("news")
