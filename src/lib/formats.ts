import { env } from "@/lib/env/client";

const defaultLocale = env.locale ?? "en-US";

export interface FormatterOptions {
  locale?: string;
}

export interface CurrencyOptions extends FormatterOptions {
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

const getLocale = (locale?: string) => locale ?? defaultLocale;

const getCurrency = (locale: string, currency?: string) => {
  if (currency) return currency;

  return locale.startsWith("fa")
    ? "IRR"
    : "USD";
};

/* -------------------------------------------------------------------------- */
/* Currency */
/* -------------------------------------------------------------------------- */

export function formatCurrency(
  value: number,
  options: CurrencyOptions = {},
) {
  const locale = getLocale(options.locale);

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: getCurrency(locale, options.currency),
    minimumFractionDigits: options.minimumFractionDigits,
    maximumFractionDigits: options.maximumFractionDigits,
  }).format(value);
}

/* -------------------------------------------------------------------------- */
/* Number */
/* -------------------------------------------------------------------------- */

export function formatNumber(
  value: number,
  options: FormatterOptions = {},
) {
  return new Intl.NumberFormat(getLocale(options.locale)).format(value);
}

/* -------------------------------------------------------------------------- */
/* Percent */
/* -------------------------------------------------------------------------- */

export function formatPercent(
  value: number,
  options: FormatterOptions = {},
) {
  return new Intl.NumberFormat(getLocale(options.locale), {
    style: "percent",
  }).format(value);
}

/* -------------------------------------------------------------------------- */
/* Date */
/* -------------------------------------------------------------------------- */

export function formatDate(
  date: Date | string | number,
  options: FormatterOptions & {
    dateStyle?: Intl.DateTimeFormatOptions["dateStyle"];
  } = {},
) {
  return new Intl.DateTimeFormat(getLocale(options.locale), {
    dateStyle: options.dateStyle ?? "medium",
  }).format(new Date(date));
}

/* -------------------------------------------------------------------------- */
/* Date Time */
/* -------------------------------------------------------------------------- */

export function formatDateTime(
  date: Date | string | number,
  options: FormatterOptions & {
    dateStyle?: Intl.DateTimeFormatOptions["dateStyle"];
    timeStyle?: Intl.DateTimeFormatOptions["timeStyle"];
  } = {},
) {
  return new Intl.DateTimeFormat(getLocale(options.locale), {
    dateStyle: options.dateStyle ?? "medium",
    timeStyle: options.timeStyle ?? "short",
  }).format(new Date(date));
}

/* -------------------------------------------------------------------------- */
/* Relative Time */
/* -------------------------------------------------------------------------- */

export function formatRelativeTime(
  date: Date | string |number,
  options: FormatterOptions = {},
) {
  const locale = getLocale(options.locale);

  const formatter = new Intl.RelativeTimeFormat(locale, {
    numeric: "auto",
  });

  const diff = new Date(date).getTime() - Date.now();

  const units = [
    ["year", 31536000000],
    ["month", 2592000000],
    ["week", 604800000],
    ["day", 86400000],
    ["hour", 3600000],
    ["minute", 60000],
    ["second", 1000],
  ] as const;

  for (const [unit, ms] of units) {
    if (Math.abs(diff) >= ms || unit === "second") {
      return formatter.format(
        Math.round(diff / ms),
        unit,
      );
    }
  }

  return "";
}

/* -------------------------------------------------------------------------- */
/* Strings */
/* -------------------------------------------------------------------------- */

export function truncate(
  value: string,
  length = 80,
) {
  return value.length > length
    ? `${value.slice(0, length)}…`
    : value;
}

export function capitalize(value: string) {
  if (!value) return value;

  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function capitalizeWords(value: string) {
  return value.replace(/\b\w/g, c => c.toUpperCase());
}

/* -------------------------------------------------------------------------- */
/* Product */
/* -------------------------------------------------------------------------- */

export function formatSku(value: string) {
  return value.trim().toUpperCase();
}

export function formatRating(
  rating: number,
  digits = 1,
) {
  return rating.toFixed(digits);
}

export function formatPhone(phone: string) {
  return phone.replace(/\D/g, "");
}