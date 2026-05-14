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
  PATH_HOME,
  PATH_RULES,
  PATH_SIGN_UP,
  PATH_SIGN_UP_JUNIOR,
  PATH_TEAMS,
} from "@/consts"
import {
  IconBeach,
  IconClipboardCheck,
  IconGavel,
  IconInfoCircle,
  IconUsers,
} from "@tabler/icons-react"
import { Link } from "react-router"
import LanguageSelect from "../../components/custom/sidebar/LanguageSelect"
import ThemeToggle from "../../components/custom/sidebar/ThemeToggle"
import { NavGeneral } from "./NavGeneral"

const sidebarConfig = {
  navGeneral: {
    title: "sidebar.general.title",
    items: [
      {
        name: "sidebar.general.info",
        url: PATH_HOME,
        icon: IconInfoCircle,
      },
      {
        name: "sidebar.general.rules",
        url: PATH_RULES,
        icon: IconGavel,
      },
      {
        name: "sidebar.general.signup",
        url: PATH_SIGN_UP,
        icon: IconClipboardCheck,
      },
      {
        name: "sidebar.general.junior-signup",
        url: PATH_SIGN_UP_JUNIOR,
        icon: IconClipboardCheck,
      },
      {
        name: "sidebar.general.teams",
        url: PATH_TEAMS,
        icon: IconUsers,
      },
    ],
  },
}

/**
 * @see https://ui.shadcn.com/blocks
 */
const VisitorSidebar = () => {
  const { openMobile, setOpenMobile } = useSidebar()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              onClick={() => setOpenMobile(!openMobile)}
            >
              <Link to={PATH_HOME}>
                <IconBeach className="size-6!" />
                <span className="text-base font-semibold">
                  Yyteri Beach Ultimate
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavGeneral
          title={sidebarConfig.navGeneral.title}
          items={sidebarConfig.navGeneral.items}
        />
      </SidebarContent>
      <SidebarFooter>
        <LanguageSelect />
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}

export default VisitorSidebar
