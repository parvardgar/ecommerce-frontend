import { clientEnvSchema } from "./schema"

const parsed = clientEnvSchema.parse(import.meta.env)

export const env = {
  apiUrl: parsed.VITE_API_URL,

  appName: parsed.VITE_APP_NAME,

  locale: parsed.VITE_DEFAULT_LOCALE,

  devtools: parsed.VITE_ENABLE_DEVTOOLS,
}