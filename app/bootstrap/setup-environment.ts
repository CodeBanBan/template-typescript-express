// @ts-expect-error @types/custom-env not exist
import { env } from 'custom-env'
import Fs from 'fs'
import Path from 'path'

const NODE_ENV = process.env.NODE_ENV ?? 'development'
const ENV_PATH = 'env'

const envLocal = `${NODE_ENV}.local`
let targetEnv = ''

if (Fs.existsSync(Path.resolve(`${ENV_PATH}/.env.${envLocal}`))) {
  targetEnv = envLocal
} else if (Fs.existsSync(Path.resolve(`${ENV_PATH}/.env.${NODE_ENV}`))) {
  targetEnv = NODE_ENV
}

env(targetEnv, ENV_PATH)
