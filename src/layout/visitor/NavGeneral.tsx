"use client"

import { type Icon } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useTranslation } from "react-i18next"
import { NavLink, useLocation } from "react-router"

export function NavGeneral({
  title,
  items,
}: {
  title: string
  items: {
    name: string
    url: string
    icon: Icon
  }[]
}) {
  const location = useLocation()
  const { t } = useTranslation()
  const { openMobile, setOpenMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="sidebar-group-label">
        {t(title)}
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              isActive={location.pathname === item.url}
              className={
                location.pathname === item.url ? "sidebar-button-active" : ""
              }
              onClick={() => setOpenMobile(!openMobile)}
            >
              <NavLink to={item.url}>
                <item.icon className="size-5!" />
                <span>{t(item.name)}</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
