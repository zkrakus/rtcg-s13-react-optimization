import MillionLint from "@million/lint";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Disable PostHog analytics globally in dev
process.env.POSTHOG_API_KEY = "";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    MillionLint.vite({
      enabled: true,
      runtime: false, // disables PostHog + injected devtools code
    }),
    react(),
  ],
  define: {
    "process.env.POSTHOG_API_KEY": JSON.stringify(""),
  },
});