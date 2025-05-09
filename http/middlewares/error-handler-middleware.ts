import type { NextFunction, Request, Response } from 'express'
import { BaseHttpError } from '../errors/base-http-error'
import { UnknownError } from '../errors/unknown-error'
import * as Logger from '../../app/helpers/logger-helper'

export function handler (err: Error, req: Request, res: Response, next: NextFunction): void {
  const httpError: BaseHttpError = (err instanceof BaseHttpError) ? err : new UnknownError()

  if (httpError.status >= 500) {
    Logger.error(err)
  }

  const result = {
    name: httpError.name,
    error: httpError.message
  }

  res.status(httpError.status)
  res.json(result)
}
