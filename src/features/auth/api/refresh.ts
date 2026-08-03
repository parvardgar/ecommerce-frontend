import type { ApiResponse } from "@/types/api"

import { publicClient } from "@/lib/axios/public-client"
import { extractData } from "@/lib/axios/extract-data"
import { tokenStorage } from "@/lib/auth/token-storage"

interface RefreshResponse {
  access: string
}

export async function refreshAccessToken(): Promise<string> {
  const response =
    await publicClient.post<ApiResponse<RefreshResponse>>(
      "/auth/refresh/",
      {},
    )

  const { access } = extractData(response)

  tokenStorage.set(access)

  return access
}