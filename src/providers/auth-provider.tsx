// features/auth/providers/auth-provider.tsx

import type { ReactNode } from "react"

import { useAuthBootstrap } from "@/features/auth/hooks/use-auth-bootstrap"

interface Props {
  children: ReactNode
}

export function AuthProvider({
  children,
}: Props) {
  const { isLoading } =
    useAuthBootstrap()

  if (isLoading) {
    return null
    // Later:
    // return <AppLoader />
  }

  return children
}