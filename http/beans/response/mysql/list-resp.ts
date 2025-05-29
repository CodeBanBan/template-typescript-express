import { BaseResp } from '../base-resp'
import { type CatDto } from '../../../../app/models/core/cat-model'

export class ListResp extends BaseResp {
  public readonly catList: CatDto[]

  constructor (catList: CatDto[]) {
    super()

    this.catList = catList
  }
}
