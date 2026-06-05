import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "react-theme-switch-animation"
import "./firebase"
import "./i18n"

import { ThemeProvider } from "./components/theme-provider"
import { SidebarProvider } from "./components/ui/sidebar"
import { Toaster } from "./components/ui/sonner"
import { TooltipProvider } from "./components/ui/tooltip"
import { AuthProvider } from "./context/auth/AuthProvider"
import "./index.css"
import RouteConfig from "./RouteConfig"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light">
      <AuthProvider>
        <TooltipProvider>
          <SidebarProvider>
            <Toaster />
            <RouteConfig />
          </SidebarProvider>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
