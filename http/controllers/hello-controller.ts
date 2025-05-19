import type { NextFunction, Request, Response } from 'express'
import { status as HttpStatus } from 'http-status'
import * as Logger from '../../app/helpers/logger-helper'
import { HelloDomain } from '../../app/domains/hello-domain'
import { ValidateError } from '../errors/validate-error'
import { CreateReq } from '../beans/request/hello/create-req'
import { HelloResp } from '../beans/response/hello/hello-resp'
import { CreateResp } from '../beans/response/hello/create-resp'

export async function hello (req: Request, res: Response): Promise<void> {
  Logger.info('Log Info: hello controller')
  const helloDomain = new HelloDomain()

  const name: string = req.params.name ?? '[No Name]'
  const message: string = helloDomain.helloWithName(name)

  const helloResp: HelloResp = new HelloResp(name, message)

  res.json(helloResp)
}

export async function create (req: Request, res: Response): Promise<void> {
  Logger.info(req.body)
  const createReq: CreateReq = new CreateReq(req.body)
  const createResp: CreateResp = new CreateResp(createReq)

  res.json(createResp)
}

export async function fail (req: Request, res: Response, next: NextFunction): Promise<void> {
  const err = new ValidateError('This is fail function', HttpStatus.IM_A_TEAPOT)

  next(err)
}
