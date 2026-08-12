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
  PATH_GAME_LIST,
  PATH_HOME,
  PATH_JUNIOR_GAME_LIST,
  PATH_JUNIOR_SCHEDULE,
  PATH_JUNIOR_STANDINGS,
  PATH_NEWS,
  PATH_RULES,
  PATH_SCHEDULE,
  PATH_SIGN_UP,
  PATH_SIGN_UP_JUNIOR,
  PATH_STANDINGS,
  PATH_TEAMS,
} from "@/consts"
import {
  IconBeach,
  IconCalendarEvent,
  IconClipboardCheck,
  IconGavel,
  IconInfoCircle,
  IconList,
  IconNews,
  IconTrophy,
  IconUsers,
} from "@tabler/icons-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import LanguageSelect from "../../components/custom/sidebar/LanguageSelect"
import ThemeToggle from "../../components/custom/sidebar/ThemeToggle"

/**
 * @see https://ui.shadcn.com/blocks
 */
const VisitorSidebar = () => {
  const { openMobile, setOpenMobile } = useSidebar()
  const { t, i18n } = useTranslation()

  const sidebarConfig = {
    navGeneral: {
      title: t("sidebar.general.title"),
      items: [
        {
          name: t("sidebar.general.info"),
          url: PATH_HOME,
          icon: IconInfoCircle,
        },
        {
          name: t("sidebar.general.rules"),
          url: PATH_RULES,
          icon: IconGavel,
        },
        {
          name: t("sidebar.general.signup"),
          url: PATH_SIGN_UP,
          icon: IconClipboardCheck,
        },
        {
          name: t("sidebar.general.junior-signup"),
          url: PATH_SIGN_UP_JUNIOR,
          icon: IconClipboardCheck,
        },
      ],
    },
    tournament: {
      title: t("sidebar.tournament.title"),
      items: [
        {
          name: t("sidebar.tournament.news"),
          url: PATH_NEWS,
          icon: IconNews,
        },
        {
          name: t("sidebar.tournament.teams"),
          url: PATH_TEAMS,
          icon: IconUsers,
        },
        {
          name: t("sidebar.tournament.gameList"),
          url: PATH_GAME_LIST,
          icon: IconList,
        },
        {
          name: t("sidebar.tournament.schedule"),
          url: PATH_SCHEDULE,
          icon: IconCalendarEvent,
        },
        {
          name: t("sidebar.tournament.standings"),
          url: PATH_STANDINGS,
          icon: IconTrophy,
        },
      ],
    },
    junior: {
      title: t("sidebar.junior.title"),
      items: [
        {
          name: t("sidebar.junior.gameList"),
          url: PATH_JUNIOR_GAME_LIST,
          icon: IconList,
        },
        {
          name: t("sidebar.junior.schedule"),
          url: PATH_JUNIOR_SCHEDULE,
          icon: IconCalendarEvent,
        },
        {
          name: t("sidebar.junior.standings"),
          url: PATH_JUNIOR_STANDINGS,
          icon: IconTrophy,
        },
      ],
    },
  }

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
        <SidebarGroup
          title={sidebarConfig.navGeneral.title}
          items={sidebarConfig.navGeneral.items}
        />
        <SidebarGroup
          title={sidebarConfig.tournament.title}
          items={sidebarConfig.tournament.items}
        />
        <SidebarGroup
          title={sidebarConfig.junior.title}
          items={sidebarConfig.junior.items}
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
