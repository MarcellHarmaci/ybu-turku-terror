import { SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import VisitorSidebar from "./VisitorSidebar"

const VisitorLayout = () => {
  return (
    <>
      <VisitorSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </>
  )
}

export default VisitorLayout
