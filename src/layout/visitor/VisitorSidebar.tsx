import { SidebarCmsPageGroup } from "@/components/custom/sidebar/SidebarCmsPageGroup"
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
import { PATHS } from "@/consts"
import {
  IconBeach,
  IconCalendarEvent,
  IconClipboardCheck,
  IconGavel,
  IconInfoCircle,
  IconList,
  IconNews,
  IconTrophy,
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
          url: PATHS.HOME,
          icon: IconInfoCircle,
        },
        {
          name: t("sidebar.general.rules"),
          url: PATHS.RULES,
          icon: IconGavel,
        },
        {
          name: t("sidebar.general.signup"),
          url: PATHS.SIGN_UP,
          icon: IconClipboardCheck,
        },
        {
          name: t("sidebar.general.junior-signup"),
          url: PATHS.SIGN_UP_JUNIOR,
          icon: IconClipboardCheck,
        },
        {
          name: t("sidebar.tournament.news"),
          url: PATHS.TOURNAMENT.NEWS,
          icon: IconNews,
        },
      ],
    },
    tournament: {
      title: t("sidebar.tournament.title"),
      items: [
        // {
        //   name: t("sidebar.tournament.teams"),
        //   url: PATHS.TOURNAMENT.TEAMS,
        //   icon: IconUsers,
        // },
        {
          name: t("sidebar.tournament.gameList"),
          url: PATHS.TOURNAMENT.GAME_LIST,
          icon: IconList,
        },
        {
          name: t("sidebar.tournament.schedule"),
          url: PATHS.TOURNAMENT.SCHEDULE,
          icon: IconCalendarEvent,
        },
        {
          name: t("sidebar.tournament.standings"),
          url: PATHS.TOURNAMENT.STANDINGS,
          icon: IconTrophy,
        },
      ],
    },
    junior: {
      title: t("sidebar.junior.title"),
      items: [
        {
          name: t("sidebar.junior.gameList"),
          url: PATHS.JUNIOR.GAME_LIST,
          icon: IconList,
        },
        {
          name: t("sidebar.junior.schedule"),
          url: PATHS.JUNIOR.SCHEDULE,
          icon: IconCalendarEvent,
        },
        {
          name: t("sidebar.junior.standings"),
          url: PATHS.JUNIOR.STANDINGS,
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
              <Link to={PATHS.HOME}>
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
        <SidebarCmsPageGroup />
      </SidebarContent>
      <SidebarFooter>
        <LanguageSelect />
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}

export default VisitorSidebar
