import { useQuery } from "@tanstack/react-query"

import { queryKeys } from "@/lib/constants/query-keys"

import { getCurrentUser } from "../api/me"

export function useMe(enabled: boolean) {
  return useQuery({
    queryKey: queryKeys.auth.me,
    queryFn: getCurrentUser,
    enabled,
    retry: false,
  })
}