import type { ComponentLayer, Variable } from "@/components/ui/ui-builder/types"

export interface Page {
  id?: string
  title: string
}

export interface PageContent {
  id?: string
  layer: ComponentLayer
  variables: Variable[]
}
