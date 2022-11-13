import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import env from "vite-plugin-env-compatible";

const cert = resolve(__dirname, "certs", "certificate.pem");
const key = resolve(__dirname, "certs", "key.pem");

const https = existsSync(cert) && existsSync(key);

export default defineConfig({
  plugins: [
    env({
      prefix: "",
      mountedPath: "process.env",
    }),
    vue(),
  ],
  base: "/legendary-fiesta/",
  server: {
    https: https && {
      cert: readFileSync(resolve(__dirname, "certs", "certificate.pem")),
      key: readFileSync(resolve(__dirname, "certs", "key.pem")),
    },
  },
});
