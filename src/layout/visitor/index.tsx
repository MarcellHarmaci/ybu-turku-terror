import { SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import VisitorSidebar from "./VisitorSidebar"

const VisitorLayout = () => {
  return (
    <>
      <VisitorSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <div className="mx-auto flex max-w-5xl flex-col gap-2">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default VisitorLayout
