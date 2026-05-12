import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import React from "react"
import {
  ThemeProvider as ShadcnThemeProvider,
  ThemeProviderContext,
  useTheme as useShadcnTheme,
} from "../theme-provider"

type Props = { children: ReactNode; splashDuration?: number }

export function ThemeSplashProvider({ children, splashDuration = 650 }: Props) {
  return (
    <ShadcnThemeProvider>
      <ThemeSplashInner splashDuration={splashDuration}>
        {children}
      </ThemeSplashInner>
    </ShadcnThemeProvider>
  )
}

function ThemeSplashInner({
  children,
  splashDuration,
}: {
  children: ReactNode
  splashDuration: number
}) {
  const { theme, setTheme } = useShadcnTheme()
  const [splashVisible, setSplashVisible] = React.useState(false)

  const setThemeWithSplash = React.useCallback(
    (nextTheme: "dark" | "light" | "system") => {
      // show splash immediately
      setSplashVisible(true)

      // small delay so splash becomes visible, then change theme
      requestAnimationFrame(() => {
        setTimeout(() => {
          setTheme(nextTheme)
        }, 50)
      })

      // hide splash after duration
      setTimeout(() => {
        setSplashVisible(false)
      }, splashDuration)
    },
    [setTheme, splashDuration]
  )

  const OverriddenContext = React.useMemo(
    () => ({
      theme,
      setTheme: (t: "dark" | "light" | "system") => setThemeWithSplash(t),
    }),
    [theme, setThemeWithSplash]
  )

  return (
    <ThemeProviderContext.Provider value={OverriddenContext}>
      {children}
      <div
        className={cn("theme-splash", splashVisible ? "show" : "")}
        aria-hidden
      >
        <div className="circle" />
      </div>
    </ThemeProviderContext.Provider>
  )
}
