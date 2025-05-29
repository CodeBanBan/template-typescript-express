import { BaseReq } from '../base-req'
import { ValidateError } from '../../../errors/validate-error'

export class CreateReq extends BaseReq {
  public readonly name: string

  constructor (body: any = {}) {
    super()

    this.name = this.castToString(body.name)

    this._validate()
  }

  private _validate (): void {
    if (this.name === '') {
      throw new ValidateError('Invalid Parameter: name')
    }
  }
}
