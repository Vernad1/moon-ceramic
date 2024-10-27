import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` // mixin, fonts loaded globally
          @import "./src/assets/styles/fonts.scss";
          @import "./src/assets/styles/mixins.scss";
          @import "./src/assets/styles/media.scss";
        `,
      },
    },
  },
});
