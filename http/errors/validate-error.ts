import { BaseHttpError } from './base-http-error'
import { status as HttpStatus } from "http-status";

const ERROR_NAME = 'ValidateError'
const ERROR_STATUS = HttpStatus.UNPROCESSABLE_ENTITY

export class ValidateError extends BaseHttpError {
  constructor(message: string, status?: number) {
    super(ERROR_NAME, message, status || ERROR_STATUS)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidateError)
    }
  }
}
