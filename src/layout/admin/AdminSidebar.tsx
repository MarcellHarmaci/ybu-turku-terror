import SidebarGroup from "@/components/custom/sidebar/SidebarGroup"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  PATH_ADMIN_EDITOR_GAME_LIST,
  PATH_ADMIN_EDITOR_NEWS,
  PATH_ADMIN_EDITOR_SCHEDULE,
  PATH_ADMIN_EDITOR_STANDINGS,
  PATH_ADMIN_HOME,
} from "@/consts"
import {
  IconCalendarEvent,
  IconList,
  IconNews,
  IconSettings,
  IconTrophy,
} from "@tabler/icons-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import LanguageSelect from "../../components/custom/sidebar/LanguageSelect"
import ThemeToggle from "../../components/custom/sidebar/ThemeToggle"

const sidebarConfig = {
  cms: {
    title: "Content management",
    items: [
      {
        name: "News",
        url: PATH_ADMIN_EDITOR_NEWS,
        icon: IconNews,
      },
      {
        name: "Game List",
        url: PATH_ADMIN_EDITOR_GAME_LIST,
        icon: IconList,
      },
      {
        name: "Schedule",
        url: PATH_ADMIN_EDITOR_SCHEDULE,
        icon: IconCalendarEvent,
      },
      {
        name: "Standings",
        url: PATH_ADMIN_EDITOR_STANDINGS,
        icon: IconTrophy,
      },
    ],
  },
}

/**
 * @see https://ui.shadcn.com/blocks
 */
const AdminSidebar = () => {
  const { i18n } = useTranslation()
  const { openMobile, setOpenMobile } = useSidebar()

  return (
    <Sidebar lang={i18n.language}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              onClick={() => setOpenMobile(!openMobile)}
            >
              <Link to={PATH_ADMIN_HOME}>
                <IconSettings className="size-6!" />
                <span className="text-base font-semibold">Admininstration</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup
          title={sidebarConfig.cms.title}
          items={sidebarConfig.cms.items}
        />
      </SidebarContent>
      <SidebarFooter>
        <LanguageSelect />
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AdminSidebar
