import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                popup: resolve(__dirname, "index.html"),
                content: resolve(__dirname, "src/content.js"), // Include content.js
                background: resolve(__dirname, "src/background.js"), // Include background.js
            },
            output: {
                entryFileNames: "[name].js",
                chunkFileNames: "[name].js",
                assetFileNames: "assets/[name].[ext]",
            },
        },
    },
    server: {
        open: true,
    },
});
