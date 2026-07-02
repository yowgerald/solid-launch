import vikeRoutegen from "@blankeos/vike-routegen"
import tailwindcss from "@tailwindcss/vite"
import vike from "vike/plugin"
import vikeSolid from "vike-solid/vite"
import { defineConfig } from "vite"
import solidSvg from "vite-plugin-solid-svg"

export default defineConfig({
  plugins: [vike(), vikeSolid(), vikeRoutegen(), solidSvg(), tailwindcss()],
  resolve: { tsconfigPaths: true },
  server: {
    // So payment webhooks work (or just replace this with the actual domain). This is only in dev anyway.
    allowedHosts: ["*"],
  },
  envPrefix: ["PUBLIC_"],
})
