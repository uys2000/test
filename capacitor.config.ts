import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.kirkdokuz.haber49",
  appName: "haber49",
  webDir: "dist",
  server: {
    url: "https://www.haber49.net/",
    cleartext: true,
  },
};

export default config;
