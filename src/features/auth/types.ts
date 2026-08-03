export interface RefreshResponse {
  access: string
}

export interface User {
  id: number
  mobile: string

  // Add more fields later:
  // first_name: string
  // last_name: string
  // avatar: string | null
}