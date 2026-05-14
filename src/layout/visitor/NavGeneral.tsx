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
import { NavLink, useLocation } from "react-router"

export function NavGeneral({
  items,
}: {
  items: {
    name: string
    url: string
    icon: Icon
  }[]
}) {
  const location = useLocation()
  const { openMobile, setOpenMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="sidebar-group-label">
        General
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
                <span>{item.name}</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
