import Alert from "@/components/custom/Alert"
import toast from "@/components/custom/toast"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import UIBuilder from "@/components/ui/ui-builder"
import type { ComponentLayer, Variable } from "@/components/ui/ui-builder/types"
import { complexComponentDefinitions } from "@/lib/ui-builder/registry/complex-component-definitions"
import { primitiveComponentDefinitions } from "@/lib/ui-builder/registry/primitive-component-definitions"
import { usePage } from "@/service/page/usePage"
import { usePageContent } from "@/service/page/usePageContent"
import { useSavePageContent } from "@/service/page/useSavePageContent"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

// TODO customize component registry!
// Default full component registry
const componentRegistry = {
  ...primitiveComponentDefinitions,
  ...complexComponentDefinitions,
}

const EMPTY_LAYER: ComponentLayer = {
  id: "1",
  type: "div",
  name: "Page 1",
  props: {
    className: "h-screen p-4 flex flex-col gap-2 bg-background overflow-y-scroll",
  },
  children: [],
}
const EMPTY_VARIABLES: Variable[] = []

function PageBuilderPage() {
  const { pageId } = useParams()
  const { data: page, isLoading, notFound, error } = usePage(pageId)
  const {
    data: content,
    isLoading: isContentLoading,
    error: contentError,
  } = usePageContent(pageId)
  const { save, loading: saving, error: saveError } = useSavePageContent()

  const [layer, setLayer] = useState<ComponentLayer>()
  const [variables, setVariables] = useState<Variable[]>()

  useEffect(() => {
    if (saveError) {
      toast.error(saveError)
    }
  }, [saveError])

  const onSave = async () => {
    if (!pageId || !layer) return

    const saved = await save(pageId, {
      layer,
      variables: variables ?? content?.variables ?? EMPTY_VARIABLES,
    })
    if (saved) {
      toast.success("Page content saved")
    }
  }

  if (error || contentError) {
    return <Alert type="error" title="Error" description={error ?? contentError} />
  }

  if (notFound) {
    return <Alert type="error" title="Page not found" />
  }

  if (isLoading || isContentLoading || !page) {
    return "Loading..."
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="text-2xl font-semibold md:text-3xl">{page.title}</div>
        <Button onClick={onSave} disabled={saving || !layer}>
          {saving && <Spinner />}
          Save
        </Button>
      </div>
      <div className="isolate overflow-hidden rounded-lg border">
        <UIBuilder
          key={pageId}
          componentRegistry={componentRegistry}
          initialLayers={[content?.layer ?? EMPTY_LAYER]}
          initialVariables={content?.variables ?? EMPTY_VARIABLES}
          persistLayerStore={false}
          allowPagesCreation={false}
          allowPagesDeletion={false}
          onChange={(pages) => setLayer(pages[0])}
          onVariablesChange={setVariables}
        />
      </div>
    </div>
  )
}

export default PageBuilderPage
