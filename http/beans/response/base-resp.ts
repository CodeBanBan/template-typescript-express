import { BaseAppBean } from '../../../app/beans/base-app-bean'

const HTTP_APP_VERSION = process.env.HTTP_APP_VERSION ?? 'dev'

export class BaseResp extends BaseAppBean {
  public readonly _appVersion: string = HTTP_APP_VERSION
}
