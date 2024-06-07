import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.kirkdokuz.haber",
  appName: "haber",
  webDir: "dist",
  server: {
    url: "http://192.168.1.68:8100",
  },
};

export default config;
