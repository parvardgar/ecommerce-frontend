import { useAuthStore } from "../store/auth-store"

export function useAuth() {
  const user = useAuthStore((s) => s.user)
  const isAuthenticated = useAuthStore(
    (s) => s.isAuthenticated,
  )
  const isInitialized = useAuthStore(
    (s) => s.isInitialized,
  )

  return {
    user,
    isAuthenticated,
    isInitialized,
  }
}