import { BaseResp } from '../base-resp'
import { type CatDto } from '../../../../app/models/core/cat-model'

export class DetailResp extends BaseResp {
  public readonly name: string
  public readonly createdAt: Date

  constructor (catData: CatDto) {
    super()

    this.name = catData.name
    this.createdAt = catData.createdAt
  }
}
