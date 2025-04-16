import { defineConfig } from "vite";
import packageJson from "./package.json";

import { baseConfig, getBuildConfig } from "../../vite.base.config";

const { lib } = getBuildConfig(__dirname, packageJson.name);

// https://vite.dev/config/
export default defineConfig({
  ...baseConfig,
  build: {
    lib,
  },
});
