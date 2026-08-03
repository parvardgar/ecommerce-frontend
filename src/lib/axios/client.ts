import axios from "axios"
import { env } from "@/lib/env/client"

export function createClient() {
  return axios.create({
    baseURL: env.apiUrl,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  })
}