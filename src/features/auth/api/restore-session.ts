import { refreshAccessToken } from "./refresh"

export async function restoreSession(): Promise<boolean> {
  try {
    await refreshAccessToken()

    return true
  } catch {
    return false
  }
}