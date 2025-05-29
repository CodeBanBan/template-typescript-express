import * as Db from '../app/models/db'

export async function resetMySQLTest (): Promise<void> {
  await Db.mainDb.sync({ force: true })
  await Db.reportDb.sync({ force: true })
  await Db.loggerDb.sync({ force: true })
}
