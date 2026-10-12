import Alert from "@/components/custom/Alert"
import LayerRenderer from "@/components/ui/ui-builder/layer-renderer"
import { complexComponentDefinitions } from "@/lib/ui-builder/registry/complex-component-definitions"
import { primitiveComponentDefinitions } from "@/lib/ui-builder/registry/primitive-component-definitions"
import { usePage } from "@/service/page/usePage"
import { usePageContent } from "@/service/page/usePageContent"
import { useParams } from "react-router"

const componentRegistry = {
  ...primitiveComponentDefinitions, // div, span, img, etc.
  ...complexComponentDefinitions, // Button, Badge, Card, etc.
}

function CmsContentPage() {
  const { pageId } = useParams()
  const { data: page, isLoading, notFound, error } = usePage(pageId)
  const {
    data: pageContent,
    isLoading: isContentLoading,
    error: contentError,
  } = usePageContent(pageId)

  if (error || contentError) {
    return (
      <Alert type="error" title="Error" description={error ?? contentError} />
    )
  }

  if (notFound) {
    return <Alert type="error" title="Page not found" />
  }

  if (isLoading || isContentLoading || !page) {
    return "Loading..."
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-semibold md:text-3xl">{page.title}</div>
      {pageContent?.layer ? (
        <LayerRenderer
          page={pageContent.layer}
          componentRegistry={componentRegistry}
          variables={pageContent.variables}
        />
      ) : (
        <div className="text-muted-foreground">This page has no content yet.</div>
      )}
    </div>
  )
}

export default CmsContentPage
