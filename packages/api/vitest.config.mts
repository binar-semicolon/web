import { defineConfig } from "vite";

export default defineConfig({
  test: {
    setupFiles: ["./src/__tests__/setup.ts"],
    fileParallelism: false,
  },
});
