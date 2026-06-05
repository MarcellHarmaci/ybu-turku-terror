import { useDelete } from "@/firestore/useDelete"

export const useDeleteNews = () => useDelete("news")
