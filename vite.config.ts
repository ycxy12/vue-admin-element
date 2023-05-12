import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: "0.0.0.0",
        port: 1212,
        open: true,
        cors: true,
        proxy: {
            "/api": {
                target: "https://www.fastmock.site/mock/5431bd867a87c7c688211f6e7a1522be/api",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/element-variables.scss" as *;`,
            },
        },
    },
})
