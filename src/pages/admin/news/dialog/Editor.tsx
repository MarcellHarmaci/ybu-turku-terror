import RichTextEditor from "@/components/custom/editor/RichTextEditor"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { NewsArticle } from "@/pages/visitor/news/NewsArticle"
import { useEffect, useState } from "react"
import { useSaveNews } from "../hooks/useSaveNews"
import type { NewsItem } from "../model/domain"

interface EditorProps {
  newsItem?: NewsItem
  close: () => void
}

export function Editor({ newsItem, close }: EditorProps) {
  const [title, setTitle] = useState<string>(newsItem?.title ?? "")
  const [content, setContent] = useState<string>(newsItem?.content ?? "")

  const { save, loading, success, error, reset } = useSaveNews()

  const onSave = () => {
    if (newsItem?.id) {
      save(newsItem.id, { ...newsItem, title, content })
    } else {
      close()
    }
  }

  useEffect(() => {
    if (success) {
      reset()
      close()
    }
  }, [success, close, reset])

  if (!newsItem) {
    return null
  }

  return (
    <Dialog
      open={!!newsItem}
      onOpenChange={(open) => {
        if (!open) close()
      }}
      modal
    >
      <DialogContent className="flex max-h-200 max-w-5xl! flex-col">
        <DialogTitle>Editing article {newsItem?.id ?? "???"}</DialogTitle>
        <div className="flex flex-col gap-4 overflow-y-scroll px-4 py-2">
          <Field>
            <FieldLabel htmlFor="editor-title">Title</FieldLabel>
            <Input
              id="editor-title"
              className="shadow-sm"
              defaultValue={newsItem?.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Field>
          <Field className="flex flex-1">
            <FieldLabel htmlFor="editor-content">Content</FieldLabel>
            <RichTextEditor
              id="editor-content"
              defaultValue={newsItem?.content}
              onChange={setContent}
            />
          </Field>
          <Field className="flex flex-1">
            <FieldLabel htmlFor="editor-preview">Preview</FieldLabel>
            <NewsArticle
              id="editor-preview"
              newsItem={{ ...newsItem, content }}
            />
          </Field>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={onSave} disabled={loading}>
              {loading && <Spinner />}
              Save
            </Button>
          </DialogClose>
          {!!error && (
            <div className="text-sm font-normal text-destructive">
              Failed to save!
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
