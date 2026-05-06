import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { PATH_HOME, PATH_SIGN_UP } from "@/consts"
import {
  IconBeach,
  IconClipboardCheck,
  IconInfoCircle,
} from "@tabler/icons-react"
import { NavGeneral } from "./NavCompetition"

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
        name: "Sign-up",
        url: PATH_SIGN_UP,
        icon: IconClipboardCheck,
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
      <SidebarFooter>{/* TODO language selector */}</SidebarFooter>
    </Sidebar>
  )
}

export default VisitorSidebar
