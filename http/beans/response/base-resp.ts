import { BaseAppBean } from '../../../app/beans/base-app-bean'

export class BaseResp extends BaseAppBean {
  // Todo: refactor use env
  public readonly _appVersion: string = 'dev'
}
