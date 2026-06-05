import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"

const chunkDef: Record<string, string[]> = {
  "vendor-editor": ["reactjs-tiptap-editor"],
  "vendor-tiptap": ["tiptap"],
  "vendor-zod": ["zod"],
  "vendor-firebase": ["firebase"],
  "vendor-katex": ["katex"],
  "vendor-react-radix": [
    "node_modules/react",
    "node_modules/react-dom",
    "node_modules/@radix-ui",
  ],
}

function manualChunks(id: string) {
  if (!id.includes("/node_modules/")) return

  for (const [chunkName, modules] of Object.entries(chunkDef)) {
    if (modules.some((module) => id.includes(module))) {
      return chunkName
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: manualChunks,
      },
    },
  },
})
