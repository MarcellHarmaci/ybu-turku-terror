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
  navGeneral: [
    {
      name: "Tournament Information",
      url: PATH_HOME,
      icon: IconInfoCircle,
    },
    {
      name: "Rules",
      url: PATH_RULES,
      icon: IconGavel,
    },
    {
      name: "Sign-up",
      url: PATH_SIGN_UP,
      icon: IconClipboardCheck,
    },
    {
      name: "Junior Sign-up",
      url: PATH_SIGN_UP_JUNIOR,
      icon: IconClipboardCheck,
    },
    {
      name: "Teams",
      url: PATH_TEAMS,
      icon: IconUsers,
    },
  ],
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
        <NavGeneral items={sidebarConfig.navGeneral} />
      </SidebarContent>
      <SidebarFooter>
        <LanguageSelect />
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}

export default VisitorSidebar
