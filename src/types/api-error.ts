import type { ApiResponse } from "./api"

export class ApiError<T = null> extends Error {
  readonly response?: ApiResponse<T>

  readonly status: number

  constructor({
    message,
    status,
    response,
  }: {
    message: string
    status: number
    response?: ApiResponse<T>
  }) {
    super(message)

    this.name = "ApiError"

    this.status = status
    this.response = response
  }

  get errors() {
    return this.response?.errors ?? null
  }

  get errorCode() {
    return this.response?.error_code ?? null
  }
}