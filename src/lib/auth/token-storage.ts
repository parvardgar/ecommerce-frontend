let accessToken: string | null = null

export const tokenStorage = {
  get(): string | null {
    return accessToken
  },

  set(token: string | null): void {
    accessToken = token
  },

  clear(): void {
    accessToken = null
  },
}