import { useDocuments } from "@/firestore/useDocuments"
import { pageConverter, type DbPage } from "@/pages/admin/cms/model/data"
import type { Page } from "@/pages/admin/cms/model/domain"

export const usePages = () => useDocuments<Page, DbPage>("page", pageConverter)
