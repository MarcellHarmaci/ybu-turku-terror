import Alert from "@/components/custom/Alert"
import { DataTable } from "@/components/custom/DataTable"
import toast from "@/components/custom/toast"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { IconPlus } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { columns } from "./columns"
import { Editor } from "./dialog/Editor"
import { Preview } from "./dialog/Preview"
import { useDeleteNews } from "./hooks/useDeleteNews"
import { useInsertNews } from "./hooks/useInsertNews"
import { useNews } from "./hooks/useNews"
import type { NewsItem } from "./model/domain"

export function NewsEditor() {
  const { data: news, isLoading, error } = useNews()
  const { insert, loading: insertLoading, error: insertError } = useInsertNews()
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
  const [editor, setEditor] = useState<NewsItem>()

  return (
    <div className="flex flex-col gap-4">
      {error && <Alert type="error" title="Error" description={error} />}
      <div className="flex flex-row justify-end gap-4">
        <div className="text-xl">News</div>
        <div className="flex grow justify-end">
          <Button onClick={insertEmptyNewsItem} disabled={insertLoading}>
            {insertLoading ? <Spinner /> : <IconPlus />} Add article
          </Button>
        </div>
      </div>
      <Preview newsItem={preview} close={() => setPreview(undefined)} />
      <Editor newsItem={editor} close={() => setEditor(undefined)} />
      <DataTable
        className="w-full"
        columns={columns(del, setPreview, setEditor)}
        data={news ?? []}
        loading={isLoading}
      />
    </div>
  )
}

export default NewsEditor
