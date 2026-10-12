import { useDocument } from "@/firestore/useDocument"
import { pageConverter, type DbPage } from "@/pages/admin/cms/model/data"
import type { Page } from "@/pages/admin/cms/model/domain"
import { useMemo } from "react"

export const usePage = (pageId?: string) => {
  const config = useMemo(() => ({ skip: !pageId }), [pageId])

  return useDocument<Page, DbPage>(
    "page",
    pageId ?? "missing",
    pageConverter,
    config
  )
}
