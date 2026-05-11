import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./firebase"
import "./i18n"

import { ThemeProvider } from "@/components/theme-provider.tsx"
import { SidebarProvider } from "./components/ui/sidebar"
import { TooltipProvider } from "./components/ui/tooltip"
import "./index.css"
import RouteConfig from "./RouteConfig"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TooltipProvider>
        <SidebarProvider>
          <RouteConfig />
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
)
