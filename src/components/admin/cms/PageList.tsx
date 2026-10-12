import { DeletePageDialogButton } from "@/components/admin/cms/DeletePageDialogButton"
import { EditPageDialogButton } from "@/components/admin/cms/EditPageDialogButton"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PATHS } from "@/consts"
import type { Page } from "@/pages/admin/cms/model/domain"
import { IconLayout } from "@tabler/icons-react"
import { Fragment } from "react"
import { generatePath, Link } from "react-router"

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
                  {page.id && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link
                        to={generatePath(PATHS.ADMIN.CMS.EDIT_PAGE, {
                          pageId: page.id,
                        })}
                      >
                        <IconLayout />
                      </Link>
                    </Button>
                  )}
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
