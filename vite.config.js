// vite.config.js
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  // 배포 경로 설정
  base: "/",
  plugins: [react()],
  // 빌드 설정
  build: {
    outDir: "dist", // 빌드 결과물이 생성될 폴더 설정
    emptyOutDir: true, // 빌드 전에 outDir 폴더를 비우는지 여부 설정
    sourcemap: true, // 소스맵 생성 여부 설정
    // 기타 빌드 옵션들...
  },
  alias: {
    react: path.resolve("./node_modules/react"),
  },
});
