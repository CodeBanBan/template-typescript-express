import { BaseResp } from '../base-resp'

export class HelloResp extends BaseResp {
  public readonly name: string
  public readonly message: string

  constructor (name: string, message: string) {
    super()

    this.name = name
    this.message = message
  }
}
