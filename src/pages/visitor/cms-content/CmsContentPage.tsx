import Alert from "@/components/custom/Alert"
import { usePage } from "@/service/page/usePage"
import { useParams } from "react-router"

function CmsContentPage() {
  const { pageId } = useParams()
  const { data: page, isLoading, notFound, error } = usePage(pageId)

  if (error) {
    return <Alert type="error" title="Error" description={error} />
  }

  if (notFound) {
    return <Alert type="error" title="Page not found" />
  }

  if (isLoading || !page) {
    return "Loading..."
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-semibold md:text-3xl">{page.title}</div>
      <div className="flex flex-col gap-6">{pageId}</div>
    </div>
  )
}

export default CmsContentPage
