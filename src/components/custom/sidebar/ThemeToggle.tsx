import { Button } from "@/components/ui/button" // replace with your shadcn button
import { IconMoon, IconSun } from "@tabler/icons-react"
import { useModeAnimation } from "react-theme-switch-animation"

export default function ThemeToggle() {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation()
  return (
    <Button
      ref={ref}
      variant={isDarkMode ? "secondary" : "ghost"}
      aria-pressed={isDarkMode}
      title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      onClick={toggleSwitchTheme}
    >
      {isDarkMode ? <IconSun /> : <IconMoon />}
      {isDarkMode ? "Light mode" : "Dark mode"}
    </Button>
  )
}
