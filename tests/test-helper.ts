import '../app/bootstrap'
import * as Db from '../app/models/db'
import * as Redis from '../app/models/redis'

export async function resetMySQLTest (): Promise<void> {
  await Db.mainDb.sync({ force: true })
  await Db.reportDb.sync({ force: true })
  await Db.loggerDb.sync({ force: true })
}

export async function resetRedisTest (): Promise<void> {
  await Redis.redis0.flushdb()
}
