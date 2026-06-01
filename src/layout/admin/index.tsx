import { SidebarTrigger } from "@/components/custom/sidebar/SidebarTrigger"
import { useAuth } from "@/context/auth/useAuth"
import AuthPage from "@/pages/admin/AuthPage"
import { Outlet } from "react-router"
import AdminSidebar from "./AdminSidebar"

const AdminLayout = () => {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated) {
    return <AuthPage />
  }

  return (
    <>
      <AdminSidebar />
      <main className="w-full">
        <div className="w-full border-b border-sidebar-border bg-sidebar">
          <SidebarTrigger />
          <div className="flex justify-end">{user?.displayName}</div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col gap-2 p-2 sm:p-4 md:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default AdminLayout
