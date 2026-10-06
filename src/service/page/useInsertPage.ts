import { useInsert } from "@/firestore/useInsert"
import type { Page } from "@/pages/admin/cms/model/domain"

export const useInsertPage = () => useInsert<Page>("page")
