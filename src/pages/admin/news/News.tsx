import Alert from "@/components/custom/Alert"
import { DataTable } from "@/components/custom/DataTable"
import toast from "@/components/custom/toast"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { IconPlus } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { columns } from "./columns"
import { Preview } from "./dialog/Preview"
import { useDeleteNews } from "./hooks/useDeleteNews"
import { useInsertNews } from "./hooks/useInsertNews"
import { useNews } from "./hooks/useNews"
import type { NewsItem } from "./model/domain"

export function News() {
  const { data: news, isLoading, error } = useNews()
  const {
    insert,
    loading: insertiLoading,
    error: insertError,
  } = useInsertNews()
  const { del, error: deleteError } = useDeleteNews()

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

  const [preview, setPreview] = useState<NewsItem>()

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
      <Preview newsItem={preview} close={() => setPreview(undefined)} />
      <DataTable
        className="w-full"
        columns={columns(del, setPreview)}
        data={news ?? []}
        loading={isLoading}
      />
    </div>
  )
}

export default News
