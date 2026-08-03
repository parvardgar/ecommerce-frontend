export const locales = {
  en: "en-US",
  fa: "fa-IR",
} as const;

export type AppLocale = keyof typeof locales;