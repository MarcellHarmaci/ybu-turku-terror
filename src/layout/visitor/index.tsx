import { SidebarTrigger } from "@/components/custom/sidebar/SidebarTrigger"
import { Outlet } from "react-router"
import VisitorSidebar from "./VisitorSidebar"

const VisitorLayout = () => {
  return (
    <>
      <VisitorSidebar />
      <main className="w-full">
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
