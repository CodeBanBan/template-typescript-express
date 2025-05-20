import '../app/bootstrap'

export class BaseTask {
  exec (): void {
    throw new Error('Not implemented')
  }
}
