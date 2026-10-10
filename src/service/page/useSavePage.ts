import { useSave } from "@/firestore/useSave"
import { pageConverter, type DbPage } from "@/pages/admin/cms/model/data"
import type { Page } from "@/pages/admin/cms/model/domain"

export const useSavePage = () => useSave<Page, DbPage>("page", pageConverter)
