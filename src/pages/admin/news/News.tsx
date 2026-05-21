import Alert from "@/components/custom/Alert"
import { DataTable } from "@/components/custom/DataTable"
import toast from "@/components/custom/toast"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { IconPlus } from "@tabler/icons-react"
import { useEffect } from "react"
import { columns } from "./columns"
import { useDeleteNews } from "./hooks/useDeleteNews"
import { useInsertNews } from "./hooks/useInsertNews"
import { useNews } from "./hooks/useNews"

export function News() {
  const { data: news, isLoading, error } = useNews()
  const {
    insert,
    loading: insertiLoading,
    error: insertError,
  } = useInsertNews()
  const deleteOperation = useDeleteNews()
  const { error: deleteError } = deleteOperation

  useEffect(() => {
    if (insertError) {
      toast.error(insertError)
    }
  }, [insertError])

  useEffect(() => {
    if (deleteError) {
      toast.error(deleteError)
    }
  }, [deleteError])

  const insertEmptyNewsItem = () =>
    insert({
      id: "",
      title: "",
      content: "",
      timestamp: new Date(),
    })

  return (
    <div className="flex flex-col gap-4">
      {error && <Alert type="error" title="Error" description={error} />}
      <div className="flex flex-row justify-end gap-4">
        <div className="text-xl">News</div>
        <div className="flex grow justify-end">
          <Button onClick={insertEmptyNewsItem} disabled={insertiLoading}>
            {insertiLoading ? <Spinner /> : <IconPlus />} Add article
          </Button>
        </div>
      </div>
      <DataTable
        className="w-full"
        columns={columns(deleteOperation)}
        data={news ?? []}
        loading={isLoading}
      />
    </div>
  )
}

export default News
