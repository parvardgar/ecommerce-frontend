import axios from "axios"

import type { ApiResponse } from "@/types/api"
import { ApiError } from "@/types/api-error"

export function mapApiError(error: unknown): ApiError {
  if (axios.isAxiosError<ApiResponse>(error)) {
    if (error.response) {
      return new ApiError({
        message: error.response.data.message,
        status: error.response.status,
        response: error.response.data,
      })
    }

    // Request was sent but no response was received
    return new ApiError({
      message: "Network error.",
      status: 0,
    })
  }

  if (error instanceof Error) {
    return new ApiError({
      message: error.message,
      status: 0,
    })
  }

  return new ApiError({
    message: "An unexpected error occurred.",
    status: 0,
  })
}