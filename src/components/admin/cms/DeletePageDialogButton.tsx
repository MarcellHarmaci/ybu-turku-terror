import toast from "@/components/custom/toast"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Spinner } from "@/components/ui/spinner"
import type { Page } from "@/pages/admin/cms/model/domain"
import { useDeletePage } from "@/service/page/useDeletePage"
import { IconTrash } from "@tabler/icons-react"
import { useEffect, useState } from "react"

interface DeletePageDialogButtonProps {
  page: Page
}

export function DeletePageDialogButton({ page }: DeletePageDialogButtonProps) {
  const [open, setOpen] = useState(false)

  const { del, loading, error } = useDeletePage()

  const onDelete = async () => {
    if (page.id && (await del(page.id))) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  return (
    <Dialog open={open} onOpenChange={setOpen} modal>
      <DialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <IconTrash />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Delete page</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete this page? This is an irreversible
          change!
        </DialogDescription>
        <div className="font-medium">{page.title}</div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive" onClick={onDelete} disabled={loading}>
            {loading ? <Spinner /> : <IconTrash />}
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
