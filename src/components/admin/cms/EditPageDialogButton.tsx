import toast from "@/components/custom/toast"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import type { Page } from "@/pages/admin/cms/model/domain"
import { useSavePage } from "@/service/page/useSavePage"
import { IconPencil } from "@tabler/icons-react"
import { useEffect, useState } from "react"

interface EditPageDialogButtonProps {
  page: Page
}

export function EditPageDialogButton({ page }: EditPageDialogButtonProps) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState(page.title)

  const { save, loading, error, reset } = useSavePage()

  const onOpenChange = (open: boolean) => {
    setOpen(open)
    if (open) {
      setTitle(page.title)
    } else {
      reset()
    }
  }

  const onSave = async () => {
    if (page.id && (await save(page.id, { ...page, title: title.trim() }))) {
      onOpenChange(false)
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <IconPencil />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit page</DialogTitle>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            onSave()
          }}
        >
          <Field>
            <FieldLabel htmlFor={`edit-page-title-${page.id}`}>
              Title
            </FieldLabel>
            <Input
              id={`edit-page-title-${page.id}`}
              className="shadow-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </Field>
          <DialogFooter>
            <Button type="submit" disabled={loading || !title.trim()}>
              {loading && <Spinner />}
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
