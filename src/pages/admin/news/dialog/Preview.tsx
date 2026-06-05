import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog"
import { NewsArticle } from "@/pages/visitor/news/NewsArticle"
import type { NewsItem } from "../model/domain"

interface PreviewProps {
  newsItem?: NewsItem
  close: () => void
}

export function Preview({ newsItem, close }: PreviewProps) {
  return (
    <Dialog
      open={!!newsItem}
      onOpenChange={(open) => {
        if (!open) close()
      }}
      modal
    >
      <DialogContent className="max-w-2xl!">
        <DialogTitle>Preview</DialogTitle>
        <DialogDescription>
          Preview of article: {newsItem?.id ?? "???"}
        </DialogDescription>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 py-2">
          {newsItem && <NewsArticle newsItem={newsItem} />}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={close}>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
