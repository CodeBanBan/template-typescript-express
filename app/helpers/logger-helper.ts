import Pino from 'pino'

const NODE_ENV = process.env.NODE_ENV ?? 'development'
const DEBUG_MODE = process.env.DEBUG_MODE ?? 'off'

const pino = Pino()

const logTest = (DEBUG_MODE === 'on') ? (arg: any): void => { console.log(arg) } : (arg: any): void => {}
const logDev = (arg: any): void => { console.log(arg) }
const mockLogger = (mockLog: any): any => ({
  child: () => mockLogger,
  error: mockLog,
  warn: mockLog,
  info: mockLog,
  debug: mockLog,
  trace: mockLog
})

const _logger = (nodeEnv: any): any => {
  switch (nodeEnv) {
    case 'test': return mockLogger(logTest)
    case 'development': return mockLogger(logDev)
    default: return pino
  }
}

const logger = _logger(NODE_ENV)

export const info = (...arg: any[]): void => logger.info(...arg)
export const error = (...arg: any[]): void => logger.error(...arg)
export const warn = (...arg: any[]): void => logger.warn(...arg)
export const debug = (...arg: any[]): void => logger.debug(...arg)
export const trace = (...arg: any[]): void => logger.trace(...arg)
