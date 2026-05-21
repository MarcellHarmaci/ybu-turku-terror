import type { DocumentData, Timestamp } from "firebase/firestore"

export interface DbNewsItem extends DocumentData {
  title: string
  content: string
  timestamp: Timestamp
}
