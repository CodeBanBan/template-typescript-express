import '../app/bootstrap'
import * as Logger from '../app/helpers/logger-helper'
import { HelloTask } from '../tasks/hello-task'

const TASK_INTERVAL_MS = 5000
const GRACEFUL_SHUTDOWN_TIMEOUT_MS = 10000

let isRunning = true

Logger.info('===> Runner Hello Task: start')

async function startRunner (): Promise<void> {
  const helloTask: HelloTask = new HelloTask()

  try {
    /* eslint-disable-next-line no-unmodified-loop-condition */
    while (isRunning) {
      try {
        helloTask.exec()
      } catch (taskError) {
        Logger.error('เกิดข้อผิดพลาดในการทำงาน:', taskError)
      }

      await new Promise(resolve => setTimeout(resolve, TASK_INTERVAL_MS))
    }

    Logger.info('การทำงานเสร็จสิ้นตามคำขอให้หยุด')
  } catch (error) {
    Logger.error('เกิดข้อผิดพลาดที่ไม่คาดคิดในระหว่างการทำงาน:', error)
    throw error
  }
}

function setupGracefulShutdown (): void {
  // จัดการกับการกดปุ่ม Ctrl+C และสัญญาณปิดระบบจาก Docker หรือระบบอื่นๆ
  process.on('SIGINT', gracefulShutdown)
  process.on('SIGTERM', gracefulShutdown)

  function gracefulShutdown (): void {
    Logger.info('ได้รับสัญญาณให้หยุดทำงาน กำลังปิดระบบอย่างปลอดภัย...')
    isRunning = false

    // ตั้งเวลาหยุดการทำงานหากไม่สามารถปิดได้ภายในเวลาที่กำหนด
    setTimeout(() => {
      Logger.info('เกินเวลาที่กำหนดในการปิดระบบ กำลังบังคับปิด')
      process.exit(1)
    }, GRACEFUL_SHUTDOWN_TIMEOUT_MS)
  }
}

function main (): void {
  setupGracefulShutdown()

  startRunner()
    .then(() => {
      Logger.info('===> Runner Hello Task: completed successfully')
      process.exit(0)
    })
    .catch(err => {
      Logger.error('เกิดข้อผิดพลาดในระบบ:', err)
      process.exit(1)
    })
}

main()
