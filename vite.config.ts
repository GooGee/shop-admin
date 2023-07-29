import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig(function ({ mode }) {
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [react()],
        resolve: {
            alias: [{ find: "@", replacement: "/src" }],
        },
        server: {
            cors: true,
            proxy: {
                "^/v1": {
                    target: env.VITE_URI,
                    changeOrigin: true,
                    cookieDomainRewrite: "",
                },
            },
        },
    }
})
