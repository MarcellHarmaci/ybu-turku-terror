import { useDocumentOnce } from "@/firestore/useDocumentOnce"
import {
  pageContentConverter,
  type DbPageContent,
} from "@/pages/admin/cms/model/data"
import type { PageContent } from "@/pages/admin/cms/model/domain"
import { useMemo } from "react"

export const usePageContentOnce = (pageId?: string) => {
  const config = useMemo(() => ({ skip: !pageId }), [pageId])

  return useDocumentOnce<PageContent, DbPageContent>(
    "page-content",
    pageId ?? "missing",
    pageContentConverter,
    config
  )
}
