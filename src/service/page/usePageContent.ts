import { useDocument } from "@/firestore/useDocument"
import {
  pageContentConverter,
  type DbPageContent,
} from "@/pages/admin/cms/model/data"
import type { PageContent } from "@/pages/admin/cms/model/domain"
import { useMemo } from "react"

export const usePageContent = (pageId?: string) => {
  const config = useMemo(() => ({ skip: !pageId }), [pageId])

  return useDocument<PageContent, DbPageContent>(
    "page-content",
    pageId ?? "missing",
    pageContentConverter,
    config
  )
}
