import { status as HttpStatus } from 'http-status'

export class BaseHttpError extends Error {
  public readonly date: Date = new Date()
  public readonly name: string = 'HttpError'
  public readonly status: number = HttpStatus.BAD_REQUEST

  constructor (name: string, message: string, status?: number) {
    super(message)

    this.name = name
    this.status = (status) ? status : this.status

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseHttpError)
    }
  }
}
