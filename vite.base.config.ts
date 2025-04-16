import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { BuildEnvironmentOptions, UserConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
const baseConfig: UserConfig = {
  define: {
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV) || "production",
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            tag.includes("Custom") || tag.includes("custom-"),
        },
      },
    }),
    tailwindcss(),
  ],
};

const getBuildConfig = (
  path: string,
  name: string
): BuildEnvironmentOptions => ({
  lib: {
    entry: resolve(path, "src/components/index.ts"),
    name: `vuejs-colombia-web-component-${name}`,
    formats: ["es"],
    fileName: (format: string) =>
      `vuejs-colombia-web-component-${name}.${format}.js`,
  },
  rollupOptions: {
    output: {
      globals: {
        vue: "Vue",
      },
    },
  },
});

export { baseConfig, getBuildConfig };
