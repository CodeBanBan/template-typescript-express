import type { Request, Response } from 'express'
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
