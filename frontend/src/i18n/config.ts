export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";
export const localeCookieName = "locale";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
