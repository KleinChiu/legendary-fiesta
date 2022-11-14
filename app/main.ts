import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";

import en from "../public/i18n/en/message.json";
import ja from "../public/i18n/ja/message.json";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: { en, ja },
});

createApp(App).use(i18n).mount("#app");
