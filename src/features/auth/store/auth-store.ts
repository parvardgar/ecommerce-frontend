import { create } from "zustand"

import type { User } from "../types"

interface AuthState {
  isInitialized: boolean
  isAuthenticated: boolean

  user: User | null

  initialize(): void

  login(user: User): void

  logout(): void

  setUser(user: User): void
}

export const useAuthStore = create<AuthState>((set) => ({
  isInitialized: false,
  isAuthenticated: false,

  user: null,

  initialize: () =>
    set({
      isInitialized: true,
    }),

  login: (user) =>
    set({
      isAuthenticated: true,
      user,
    }),

  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),

  setUser: (user) =>
    set({
      user,
    }),
}))