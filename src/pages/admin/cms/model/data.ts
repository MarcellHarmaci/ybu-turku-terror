import type { ComponentLayer, Variable } from "@/components/ui/ui-builder/types"
import {
  QueryDocumentSnapshot,
  type DocumentData,
  type FirestoreDataConverter,
} from "firebase/firestore"
import type { Page, PageContent } from "./domain"

export interface DbPage extends DocumentData {
  title: string
}

export const pageConverter: FirestoreDataConverter<Page, DbPage> = {
  fromFirestore: (snapshot: QueryDocumentSnapshot<DbPage, Page>) => ({
    ...snapshot.data(),
    id: snapshot.id,
  }),
  toFirestore: (model: Page) => ({
    ...model,
  }),
}

export interface DbPageContent extends DocumentData {
  layer: ComponentLayer
  variables: Variable[]
}

export const pageContentConverter: FirestoreDataConverter<
  PageContent,
  DbPageContent
> = {
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<DbPageContent, PageContent>
  ) => {
    const data = snapshot.data()
    return {
      id: snapshot.id,
      layer: data.layer,
      variables: data.variables ?? [],
    }
  },
  // The JSON round trip drops undefined values, which Firestore rejects
  toFirestore: ({ layer, variables }: PageContent) =>
    JSON.parse(JSON.stringify({ layer, variables })),
}
