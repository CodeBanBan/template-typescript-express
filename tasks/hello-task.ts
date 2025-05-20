import { BaseTask } from './base-task'
import * as Logger from '../app/helpers/logger-helper'
import { HelloDomain } from '../app/domains/hello-domain'

class HelloTask extends BaseTask {
  private readonly helloDomain: HelloDomain = new HelloDomain()

  exec (): void {
    const message: string = this.helloDomain.helloWithName('by Task')

    Logger.info(message)
    Logger.info(process.env.HTTP_APP_VERSION ?? 'not-found')
  }
}

export { HelloTask }
export default HelloTask
