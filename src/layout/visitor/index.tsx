import { SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import VisitorSidebar from "./VisitorSidebar"

const VisitorLayout = () => {
  return (
    <>
      <VisitorSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <div className="flex flex-col gap-2 px-2 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default VisitorLayout
