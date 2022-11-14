import { createI18n } from "vue-i18n";

import defaultLocale from "../public/locales/en.json";

export type SupportLocales = "en" | "ja";

export type MessageSchema = typeof defaultLocale;

export const i18n = createI18n<[MessageSchema], SupportLocales>({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: { en: defaultLocale, ja: defaultLocale },
});

export default i18n;
