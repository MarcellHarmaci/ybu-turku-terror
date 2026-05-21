import { useInsert } from "@/service/useInsert"
import type { NewsItem } from "../model/domain"

export const useInsertNews = () => useInsert<NewsItem>("news")
