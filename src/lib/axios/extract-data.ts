import type { AxiosResponse } from "axios"

import type { ApiResponse } from "@/types/api"

export function extractData<T>(
  response: AxiosResponse<ApiResponse<T>>,
): T {
  return response.data.data
}