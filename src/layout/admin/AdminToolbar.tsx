import { SidebarTrigger } from "@/components/custom/sidebar/SidebarTrigger"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/context/auth/useAuth"
import { auth } from "@/firebase"
import { IconLogout } from "@tabler/icons-react"
import { signOut } from "firebase/auth"

export const AdminToolbar = () => {
  const { user } = useAuth()

  return (
    <div className="flex w-full border-b border-sidebar-border bg-sidebar">
      <SidebarTrigger />
      <div className="flex grow justify-end p-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarFallback>
                {user?.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-auto">
            <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
            <DropdownMenuItem
              variant="destructive"
              onClick={() => signOut(auth)}
            >
              <IconLogout /> Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
