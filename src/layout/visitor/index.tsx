import { SidebarTrigger } from "@/components/custom/sidebar/SidebarTrigger"
import { useTranslation } from "react-i18next"
import { Outlet } from "react-router"
import VisitorSidebar from "./VisitorSidebar"

const VisitorLayout = () => {
  const { i18n } = useTranslation()

  return (
    <>
      <VisitorSidebar />
      <main className="w-full" lang={i18n.language}>
        <div className="w-full border-b border-sidebar-border bg-sidebar">
          <SidebarTrigger />
        </div>
        <div className="mx-auto flex max-w-5xl flex-col gap-2 p-2 sm:p-4 md:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default VisitorLayout
