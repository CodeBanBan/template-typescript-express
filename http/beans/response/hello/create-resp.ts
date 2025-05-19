import { BaseResp } from '../base-resp'
import { type CreateReq } from '../../request/hello/create-req'

export class CreateResp extends BaseResp {
  public readonly message: string
  public readonly bodyReq: CreateReq

  constructor (bodyReq: CreateReq) {
    super()

    this.message = `hello world ${bodyReq.name}`
    this.bodyReq = bodyReq
  }
}
