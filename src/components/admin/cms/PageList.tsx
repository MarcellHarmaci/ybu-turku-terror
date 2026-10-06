import { DeletePageDialogButton } from "@/components/admin/cms/DeletePageDialogButton"
import { EditPageDialogButton } from "@/components/admin/cms/EditPageDialogButton"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { Page } from "@/pages/admin/cms/model/domain"
import { Fragment } from "react"

interface PageListProps {
  items?: Page[]
}

export function PageList({ items = [] }: PageListProps) {
  return (
    <Card className="my-0 py-0">
      <CardContent>
        {!items ? (
          <div className="py-2 text-muted-foreground">No pages yet.</div>
        ) : (
          items.map((page, index) => (
            <Fragment key={page.id ?? index}>
              {index > 0 && <Separator />}
              <div className="flex items-center justify-between gap-2 py-2">
                <span className="truncate">{page.title}</span>
                <div className="flex gap-1">
                  <EditPageDialogButton page={page} />
                  <DeletePageDialogButton page={page} />
                </div>
              </div>
            </Fragment>
          ))
        )}
      </CardContent>
    </Card>
  )
}
