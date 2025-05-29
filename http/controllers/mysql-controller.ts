import type { Request, Response } from 'express'
import { NotFoundError } from '../errors/not-found-error'
import * as CatRepo from '../../app/repositories/cat-repository'
import { CreateReq } from '../beans/request/mysql/create-req'
import { CreateResp } from '../beans/response/mysql/create-resp'
import { ListResp } from '../beans/response/mysql/list-resp'
import { DetailResp } from '../beans/response/mysql/detail-resp'

export async function list (req: Request, res: Response): Promise<void> {
  const catList = await CatRepo.list()

  const listResp = new ListResp(catList)

  res.json(listResp)
}

export async function detail (req: Request, res: Response): Promise<void> {
  const name: string = req.params.name ?? ''

  if (name === '') {
    throw new NotFoundError('Cat not exist')
  }

  const catData = await CatRepo.findByName(name)

  if (catData === null) {
    throw new NotFoundError('Cat not exist')
  }

  const detailResp = new DetailResp(catData)

  res.json(detailResp)
}

export async function create (req: Request, res: Response): Promise<void> {
  const createReq: CreateReq = new CreateReq(req.body)

  const catId = await CatRepo.add(createReq.name)

  const createResp = new CreateResp(catId)

  res.json(createResp)
}
