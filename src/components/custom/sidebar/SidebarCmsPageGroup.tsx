import { PATHS } from "@/consts"
import { usePages } from "@/service/page/usePages"
import { IconFile } from "@tabler/icons-react"
import SidebarGroup from "./SidebarGroup"

export function SidebarCmsPageGroup() {
  const { data: pages } = usePages()

  return (
    <SidebarGroup
      title={"CMS Content"}
      items={(pages ?? []).map((page) => ({
        icon: IconFile, // TODO load custom icon
        name: page.title,
        url: `${PATHS.CMS_PAGE_ROOT}/${page.id ?? "not-found"}`,
      }))}
    />
  )
}
