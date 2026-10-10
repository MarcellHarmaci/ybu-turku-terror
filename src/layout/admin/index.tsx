import { PATHS } from "@/consts"
import { useAuth } from "@/context/auth/useAuth"
import { cn } from "@/lib/utils"
import AuthPage from "@/pages/admin/AuthPage"
import WaitingForApproval from "@/pages/admin/WaitingForApproval"
import { useIsAllowedtoEdit } from "@/service/auth/useIsAllowedtoEdit"
import { useTranslation } from "react-i18next"
import { Outlet, useMatch } from "react-router"
import AdminSidebar from "./AdminSidebar"
import { AdminToolbar } from "./AdminToolbar"

const AdminLayout = () => {
  const { i18n } = useTranslation()
  const { isAuthenticated, user } = useAuth()
  const { isAllowedToEdit } = useIsAllowedtoEdit(user?.uid)
  const isFullWidth = useMatch(PATHS.ADMIN.CMS.EDIT_PAGE) !== null

  if (!isAuthenticated) {
    return <AuthPage />
  }

  return (
    <>
      <AdminSidebar />
      <main className="w-full min-w-0" lang={i18n.language}>
        <AdminToolbar />
        <div
          className={cn(
            "mx-auto flex flex-col gap-2 p-2 sm:p-4 md:p-6 lg:p-8",
            !isFullWidth && "max-w-5xl"
          )}
        >
          {isAllowedToEdit ? <Outlet /> : <WaitingForApproval />}
        </div>
      </main>
    </>
  )
}

export default AdminLayout
