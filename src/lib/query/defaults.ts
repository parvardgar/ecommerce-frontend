import type { DefaultOptions } from "@tanstack/react-query"

export const defaultQueryOptions: DefaultOptions = {
  queries: {
    staleTime: 1000 * 60 * 5, // 5 minutes

    gcTime: 1000 * 60 * 30, // 30 minutes

    retry: (failureCount, error) => {
      // We'll improve this later when Axios is added.
      if (failureCount >= 2) return false

      return true
    },

    refetchOnWindowFocus: false,

    refetchOnReconnect: true,

    refetchOnMount: false,
  },

  mutations: {
    retry: false,
  },
}