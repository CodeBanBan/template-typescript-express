import { BaseHttpError } from './base-http-error'
import { status as HttpStatus } from "http-status";

const ERROR_NAME = 'UnknownError'
const ERROR_STATUS = HttpStatus.INTERNAL_SERVER_ERROR

export class UnknownError extends BaseHttpError {
  constructor() {
    super(ERROR_NAME, 'unknown error', ERROR_STATUS)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UnknownError)
    }
  }
}
