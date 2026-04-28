import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { PATH_HOME, PATH_SIGNUP } from "@/consts"
import {
  IconBeach,
  IconClipboardCheck,
  IconDatabase,
  IconFileWord,
  IconInfoCircle,
  IconReport,
} from "@tabler/icons-react"
import { NavCompetition } from "./NavCompetition"

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
    navCompetition: [
      {
        name: "Info",
        url: PATH_HOME,
        icon: IconInfoCircle,
      },
      {
        name: "Signup",
        url: PATH_SIGNUP,
        icon: IconClipboardCheck,
      },
    ],
    documents: [
      {
        name: "Data Library",
        url: "#",
        icon: IconDatabase,
      },
      {
        name: "Reports",
        url: "#",
        icon: IconReport,
      },
      {
        name: "Word Assistant",
        url: "#",
        icon: IconFileWord,
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
        <NavCompetition items={data.navCompetition} />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default VisitorSidebar
