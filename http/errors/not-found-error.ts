import { BaseHttpError } from './base-http-error'
import { status as HttpStatus } from 'http-status'

const ERROR_NAME = 'NotFoundError'
const ERROR_STATUS = HttpStatus.NOT_FOUND

export class NotFoundError extends BaseHttpError {
  constructor (message: string, status?: number) {
    super(ERROR_NAME, message, status ?? ERROR_STATUS)

    if (Error.captureStackTrace !== null) {
      Error.captureStackTrace(this, NotFoundError)
    }
  }
}
