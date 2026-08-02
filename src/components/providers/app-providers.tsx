import type { ReactNode } from "react"

import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toast"

interface AppProvidersProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}

      <Toaster/>
    </ThemeProvider>
  )
}