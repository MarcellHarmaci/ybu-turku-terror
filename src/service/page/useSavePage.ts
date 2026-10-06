import { useSave } from "@/firestore/useSave"
import { converter, type DbPage } from "@/pages/admin/cms/model/data"
import type { Page } from "@/pages/admin/cms/model/domain"

export const useSavePage = () => useSave<Page, DbPage>("page", converter)
