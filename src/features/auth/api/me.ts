import type { ApiResponse } from "@/types/api"

import { authenticatedClient } from "@/lib/axios/authenticated-client"
import { extractData } from "@/lib/axios/extract-data"

import type { User } from "../types"

export async function getCurrentUser(): Promise<User> {
  const response =
    await authenticatedClient.get<ApiResponse<User>>(
      "/auth/me/",
    )

  return extractData(response)
}