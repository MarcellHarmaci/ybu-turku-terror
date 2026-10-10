import { useSave } from "@/firestore/useSave"
import {
  pageContentConverter,
  type DbPageContent,
} from "@/pages/admin/cms/model/data"
import type { PageContent } from "@/pages/admin/cms/model/domain"

export const useSavePageContent = () =>
  useSave<PageContent, DbPageContent>("page-content", pageContentConverter)
