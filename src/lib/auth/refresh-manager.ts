import { refreshAccessToken } from "@/features/auth/api/refresh"

let refreshPromise: Promise<string> | null = null

export async function refreshAccessTokenOnce(): Promise<string> {
  if (!refreshPromise) {
    refreshPromise = refreshAccessToken().finally(() => {
      refreshPromise = null
    })
  }

  return refreshPromise
}