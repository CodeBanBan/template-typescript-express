import * as Logger from '../app/helpers/logger-helper'
import { type BaseTask } from '../tasks/base-task'

async function runTask(taskName: string) {
  const module = await import(`../tasks/${taskName}`)
  const task: BaseTask = new module.default()

  if (typeof task?.exec !== 'function') {
    throw new Error(`No exec() found in ${taskName}`)
  }

  task?.exec()
}

const taskName = process.argv[2]; // อ่านจาก command line arg

Logger.info(`===> Task ${taskName}: start`)

runTask(taskName)
  .then(() => {
    Logger.info(`===> Task ${taskName}: executed successfully`)
  })
  .catch(err => {
    Logger.error(err)
  })
