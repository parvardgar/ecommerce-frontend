import type { AxiosResponse } from "axios"

import type { ApiResponse } from "@/types/api"

export function requireData<T>(
  response: AxiosResponse<ApiResponse<T>>,
): T {
  const data = response.data.data

  if (data === null) {
    throw new Error("Expected response data but received null.")
  }

  return data
}