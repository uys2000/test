import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.kirkdokuz.haber",
  appName: "haber",
  webDir: "dist",
  server: {
    androidScheme: "https",
    cleartext: true,
    url: "https://192.168.1.138:5173/",
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
