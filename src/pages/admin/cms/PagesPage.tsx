import { CreatePageDialogButton } from "@/components/admin/cms/CreatePageDialogButton"
import { PageList } from "@/components/admin/cms/PageList"
import { usePages } from "@/service/page/usePages"

export function PagesPage() {
  const { data: pages } = usePages()
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row">
        <div className="text-xl">Custom Pages</div>
        <div className="flex grow justify-end">
          <CreatePageDialogButton />
        </div>
      </div>
      <PageList items={pages ?? []} />
    </div>
  )
}
