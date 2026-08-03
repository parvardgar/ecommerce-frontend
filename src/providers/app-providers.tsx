import type { ReactNode } from "react"

import { ThemeProvider } from "next-themes"

import { QueryProvider } from "@/lib/query/provider"
import { Toaster } from "@/components/ui/toast"
import { AuthProvider } from "./auth-provider"

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
      <QueryProvider>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  )
}