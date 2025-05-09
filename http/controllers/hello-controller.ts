import type { NextFunction, Request, Response } from 'express'
import * as _ from 'lodash'
import * as Logger from '../../app/helpers/logger-helper'
import { HelloDomain } from '../../app/domains/hello-domain'

export async function hello (req: Request, res: Response) {
  Logger.info('Log Info: hello controller')
  const helloDomain = new HelloDomain()

  const name = req.params.name || '[No Name]'
  const message = helloDomain.helloWithName(name)

  res.json({
    message: message
  })
}

export async function create (req: Request, res: Response) {
  Logger.info(req.body)
  const name = _.get(req, 'body.name', '[No Name Body]')

  res.json({
    message: `hello world ${name}`
  })
}
