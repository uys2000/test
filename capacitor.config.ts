import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.kirkdokuz.haber",
  appName: "haber",
  webDir: "dist",
  server: {
    androidScheme: "https",
    cleartext: true,
    url: "https://www.haber49.net/",
  },
};

export default config;
