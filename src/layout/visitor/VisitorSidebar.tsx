import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
import LanguageSelect from "./LanguageSelect"
import { NavGeneral } from "./NavGeneral"

/**
 * @see https://ui.shadcn.com/blocks
 */
const VisitorSidebar = () => {
  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
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

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href={PATH_HOME}>
                <IconBeach className="size-6!" />
                <span className="text-base font-semibold">
                  Yyteri Beach Ultimate
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavGeneral items={data.navGeneral} />
      </SidebarContent>
      <SidebarFooter>
        <LanguageSelect />
      </SidebarFooter>
    </Sidebar>
  )
}

export default VisitorSidebar
