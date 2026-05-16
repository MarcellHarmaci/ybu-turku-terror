import { useSidebar } from "@/components/ui/sidebar"
import {
  IconLayoutSidebarLeftCollapseFilled,
  IconLayoutSidebarLeftExpandFilled,
} from "@tabler/icons-react"

export function SidebarTrigger() {
  const { toggleSidebar, open, isMobile } = useSidebar()

  return (
    <button className="m-2" onClick={toggleSidebar}>
      {!open || isMobile ? (
        <IconLayoutSidebarLeftExpandFilled size={24} />
      ) : (
        <IconLayoutSidebarLeftCollapseFilled size={24} />
      )}
    </button>
  )
}
