export type ApiErrors =
  | Record<string, string[]>
  | string[]
  | string

export interface ApiResponse<T = null> {
  success: boolean
  message: string
  data: T 
  errors: ApiErrors | null
  error_code: string | null
}