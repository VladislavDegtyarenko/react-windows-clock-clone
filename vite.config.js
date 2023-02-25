import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-windows-clock-clone/",
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // console.log("id: ", id);
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
          if (id.includes("src/Apps")) {
            console.log("id: ", id);
            return id.toString().split("src/Apps/")[1].split("/")[0].toString();
          }
        },
        // manualChunks: {
        //   AlarmApp: ["src/Apps/AlarmApp.jsx"],
        //   StopwatchApp: ["src/Apps/StopwatchApp.jsx"],
        //   TimerApp: ["src/Apps/TimerApp.jsx"],
        //   WorldClockApp: ["src/Apps/WorldClockApp.jsx"],
        //   Settings: ["src/Apps/Settings.jsx"],
        // },
      },
    },
  },
});
