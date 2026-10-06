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
import { useInsertPage } from "@/service/page/useInsertPage"
import { IconPlus } from "@tabler/icons-react"
import { useEffect, useState } from "react"

export function CreatePageDialogButton() {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")

  const { insert, loading, error, reset } = useInsertPage()

  const onOpenChange = (open: boolean) => {
    setOpen(open)
    if (!open) {
      setTitle("")
      reset()
    }
  }

  const onCreate = async () => {
    if (await insert({ title: title.trim() })) {
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
        <Button>
          <IconPlus /> Create page
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create page</DialogTitle>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            onCreate()
          }}
        >
          <Field>
            <FieldLabel htmlFor="new-page-title">Title</FieldLabel>
            <Input
              id="new-page-title"
              className="shadow-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </Field>
          <DialogFooter>
            <Button type="submit" disabled={loading || !title.trim()}>
              {loading && <Spinner />}
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
