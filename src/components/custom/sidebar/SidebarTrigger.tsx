import { useSidebar } from "@/components/ui/sidebar"
import {
  IconLayoutSidebarLeftCollapseFilled,
  IconLayoutSidebarLeftExpandFilled,
} from "@tabler/icons-react"

export function SidebarTrigger() {
  const { toggleSidebar, open } = useSidebar()

  return (
    <button className="m-2" onClick={toggleSidebar}>
      {open ? (
        <IconLayoutSidebarLeftCollapseFilled size={24} />
      ) : (
        <IconLayoutSidebarLeftExpandFilled size={24} />
      )}
    </button>
  )
}
