export interface RedisConfig {
  HOST: string
  PORT: number
  PASSWORD: string
}

/**
 * Default configuration values when environment variables are not set
 */
export const config: RedisConfig = {
  HOST: process.env.REDIS_HOST ?? 'localhost',
  PORT: Number(process.env.REDIS_PORT) ?? '6379',
  PASSWORD: process.env.REDIS_PASSWORD ?? ''
}
