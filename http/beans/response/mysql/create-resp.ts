import { BaseResp } from '../base-resp'
import { type CatDto } from '../../../../app/models/core/cat-model'

export class CreateResp extends BaseResp {
  public readonly id: number
  public readonly name: string

  constructor (cat: CatDto) {
    super()

    this.id = cat.id
    this.name = cat.name
  }
}
