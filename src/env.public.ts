import { createEnv } from "@t3-oss/env-core"
import z from "zod"

export const publicEnv = createEnv({
  clientPrefix: "PUBLIC_",
  client: {
    PUBLIC_BASE_URL: z.string().default("http://localhost:3000"),
  },
  runtimeEnvStrict: {
    NODE_ENV: import.meta.env.NODE_ENV,

    PUBLIC_BASE_URL: import.meta.env.PUBLIC_BASE_URL,
  },
  server: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
  },
})
