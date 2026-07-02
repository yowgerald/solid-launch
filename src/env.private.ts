import { createEnv } from "@t3-oss/env-core"
import z from "zod"

export const privateEnv = createEnv({
  runtimeEnv: process.env,
  server: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    PORT: z.coerce.number().default(3000),

    DATABASE_AUTH_TOKEN: z
      .string()
      .optional()
      .refine((val) => (process.env.NODE_ENV !== "development" ? !!val : true)),
    DATABASE_URL: z.string(),

    DODO_PAYMENTS_API_KEY: z.string(),
    DODO_PAYMENTS_ENV: z.enum(["test_mode", "live_mode"]).default("test_mode"),
    DODO_PAYMENTS_WEBHOOK_SECRET: z.string(),

    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),

    GOOGLE_OAUTH_CLIENT_ID: z.string(),
    GOOGLE_OAUTH_CLIENT_SECRET: z.string(),

    S3_ACCESS_KEY_ID: z.string(),
    S3_BUCKET_NAME: z.string().default("solid-launch"),
    S3_ENDPOINT: z.string().default("http://127.0.0.1:9000"),
    S3_REGION: z.string().default("us-east-1"),
    S3_SECRET_ACCESS_KEY: z.string(),

    ZEPTOMAIL_FROM: z.string().refine((val) => /^[^<]*\s<[^>]+>$/.test(val), {
      message: 'Must be in "Name <email@example.com>" format',
    }),
    ZEPTOMAIL_TOKEN: z.string(),

    // SMTP - in case you want something other than zeptomail
    // SMTP_HOST: z.string(),
    // SMTP_PORT: z.preprocess(Number, z.number()),
    // SMTP_SECURE: z.preprocess((val) => String(val).toLowerCase() === 'true', z.boolean()),
    // SMTP_USER: z.string(),
    // SMTP_PASS: z.string(),
    // SMTP_FROM: z.string(),
  },
})
