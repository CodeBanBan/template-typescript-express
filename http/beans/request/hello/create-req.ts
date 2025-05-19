import { BaseReq } from '../base-req'

export class CreateReq extends BaseReq {
  public readonly name: string
  public readonly age: number
  public active: boolean

  constructor (body: any = {}) {
    super()

    this.name = this.castToString(body.name, '[No Name Body]')
    this.age = this.castToNumber(body.age)
    this.active = this.castToBoolean(body.active)
  }
}
