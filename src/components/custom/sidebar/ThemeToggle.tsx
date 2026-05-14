import { Button } from "@/components/ui/button" // replace with your shadcn button
import { IconMoon, IconSun } from "@tabler/icons-react"
import { useTranslation } from "react-i18next"
import { useModeAnimation } from "react-theme-switch-animation"

export default function ThemeToggle() {
  const { t } = useTranslation()
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation()

  return (
    <Button
      ref={ref}
      variant={isDarkMode ? "secondary" : "ghost"}
      aria-pressed={isDarkMode}
      title={t("sidebar.mode.switch", {
        nextMode: t(
          isDarkMode
            ? "sidebar.mode.switch-next-mode-light"
            : "sidebar.mode.switch-next-mode-dark"
        ),
      })}
      onClick={toggleSwitchTheme}
    >
      {isDarkMode ? <IconSun /> : <IconMoon />}
      {isDarkMode ? t("sidebar.mode.light") : t("sidebar.mode.dark")}
    </Button>
  )
}
