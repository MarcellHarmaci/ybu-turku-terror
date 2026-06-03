import { useAuth } from "@/context/auth/useAuth"
import AuthPage from "@/pages/admin/AuthPage"
import { Outlet } from "react-router"
import AdminSidebar from "./AdminSidebar"
import { AdminToolbar } from "./AdminToolbar"

const AdminLayout = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <AuthPage />
  }

  return (
    <>
      <AdminSidebar />
      <main className="w-full">
        <AdminToolbar />
        <div className="mx-auto flex max-w-5xl flex-col gap-2 p-2 sm:p-4 md:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default AdminLayout
