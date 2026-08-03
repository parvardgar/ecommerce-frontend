import { z } from "zod"

export const clientEnvSchema = z.object({
  VITE_API_URL: z.url(),

  VITE_APP_NAME: z.string(),

  VITE_DEFAULT_LOCALE: z.enum(["fa", "en"]),

  VITE_ENABLE_DEVTOOLS: z
    .string()
    .transform(value => value === "true"),
})

export type ClientEnv = z.infer<typeof clientEnvSchema>