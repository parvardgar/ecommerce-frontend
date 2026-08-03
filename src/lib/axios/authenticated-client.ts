import { tokenStorage } from "@/lib/auth/token-storage"
import { refreshAccessTokenOnce } from "@/lib/auth/refresh-manager"
import { mapApiError } from "./errors"
import { createClient } from "./client"

export const authenticatedClient = createClient()

authenticatedClient.interceptors.request.use((config) => {
  const token = tokenStorage.get()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

authenticatedClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true

      try {
        const accessToken = await refreshAccessTokenOnce()

        originalRequest.headers.Authorization =
          `Bearer ${accessToken}`

        return authenticatedClient(originalRequest)
      } catch (refreshError) {
        tokenStorage.clear()

        throw mapApiError(refreshError)
      }
    }

    throw mapApiError(error)
  },
)