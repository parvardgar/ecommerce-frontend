import { useEffect, useState } from "react"

import { tokenStorage } from "@/lib/auth/token-storage"

import { restoreSession } from "../api/restore-session"
import { useMe } from "./use-me"
import { useAuthStore } from "../store/auth-store"

export function useAuthBootstrap() {
  const [bootstrapFinished, setBootstrapFinished] =
    useState(false)

  const [hasSession, setHasSession] =
    useState(false)

  const initialize = useAuthStore(
    (state) => state.initialize,
  )

  const login = useAuthStore(
    (state) => state.login,
  )

  const logout = useAuthStore(
    (state) => state.logout,
  )

  const isInitialized = useAuthStore(
    (state) => state.isInitialized,
  )

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated,
  )

  // Step 1: Try restoring the session
  useEffect(() => {
    let cancelled = false

    async function bootstrap() {
      const restored = await restoreSession()

      if (cancelled) {
        return
      }

      if (!restored) {
        tokenStorage.clear()
      }

      setHasSession(restored)
      setBootstrapFinished(true)
    }

    void bootstrap()

    return () => {
      cancelled = true
    }
  }, [])

  // Step 2: Fetch the current user only if we have a session
  const meQuery = useMe(hasSession)

  // Step 3: Finalize authentication state
  useEffect(() => {
    if (!bootstrapFinished) {
      return
    }

    // No session could be restored → guest user
    if (!hasSession) {
      logout()
      initialize()
      return
    }

    // Waiting for /me
    if (meQuery.isFetching) {
      return
    }

    // Session restored successfully
    if (meQuery.data) {
      login(meQuery.data)
    } else {
      tokenStorage.clear()
      logout()
    }

    initialize()
  }, [
    bootstrapFinished,
    hasSession,
    meQuery.data,
    meQuery.isFetching,
    login,
    logout,
    initialize,
  ])

  return {
    isLoading:
      !bootstrapFinished ||
      !isInitialized ||
      (hasSession && meQuery.isFetching),

    isAuthenticated,

    user: meQuery.data ?? null,
  }
}