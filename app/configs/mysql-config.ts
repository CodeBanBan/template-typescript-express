export interface MySqlConfig {
  HOST: string
  PORT: string
  DATABASE: string
  USER: string
  PASSWORD: string
}

/**
 * Available database types in the system
 */
export enum DATABASE_TYPE {
  MAIN = 'MAIN',
  REPORT = 'REPORT',
  LOGGER = 'LOGGER'
}

/**
 * Environment variable prefix for each database type
 */
const DB_ENV_PREFIX: Record<DATABASE_TYPE, string> = {
  [DATABASE_TYPE.MAIN]: 'MYSQL_MAIN_',
  [DATABASE_TYPE.REPORT]: 'MYSQL_REPORT_',
  [DATABASE_TYPE.LOGGER]: 'MYSQL_LOGGER_'
}

/**
 * Default configuration values when environment variables are not set
 */
const DEFAULT_CONFIG: MySqlConfig = {
  HOST: 'localhost',
  PORT: '3306',
  DATABASE: '',
  USER: 'root',
  PASSWORD: ''
}

/**
 * Creates a MySQL configuration object based on the specified database type
 * @param type - The database type to create configuration for
 * @returns MySqlConfig object with values from environment variables or defaults
 */
function createMySqlConfig (type: DATABASE_TYPE): MySqlConfig {
  const prefix: string = DB_ENV_PREFIX[type]

  return {
    HOST: process.env[`${prefix}HOST`] ?? DEFAULT_CONFIG.HOST,
    PORT: process.env[`${prefix}PORT`] ?? DEFAULT_CONFIG.PORT,
    DATABASE: process.env[`${prefix}DATABASE`] ?? DEFAULT_CONFIG.DATABASE,
    USER: process.env[`${prefix}USER`] ?? DEFAULT_CONFIG.USER,
    PASSWORD: process.env[`${prefix}PASSWORD`] ?? DEFAULT_CONFIG.PASSWORD
  }
}

// Export pre-configured database configurations
export const MAIN: MySqlConfig = createMySqlConfig(DATABASE_TYPE.MAIN)
export const REPORT: MySqlConfig = createMySqlConfig(DATABASE_TYPE.REPORT)
export const LOGGER: MySqlConfig = createMySqlConfig(DATABASE_TYPE.LOGGER)
