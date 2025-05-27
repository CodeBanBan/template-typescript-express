import {
  type Model,
  type ModelAttributes,
  type ModelOptions,
  type ModelStatic,
  Sequelize
} from 'sequelize'
import * as MYSQL_CONFIG from '../configs/mysql-config'
import * as Logger from '../helpers/logger-helper'

const options = (config: MYSQL_CONFIG.MySqlConfig): object => {
  return {
    dialect: 'mysql',
    host: config.HOST,
    port: config.PORT,
    username: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE,
    models: [],
    logging: (process.env.APPLICATION_ENV === 'development') ? Logger.info : null
    // define: {
    //   underscored: true,
    //   timestamps: false
    //   // paranoid: true,
    //   // deletedAt: 'deleted',
    //   // createdAt: 'created',
    //   // updatedAt: 'updated'
    // }
  }
}

export const mainDb: Sequelize = new Sequelize(options(MYSQL_CONFIG.MAIN))
export const reportDb: Sequelize = new Sequelize(options(MYSQL_CONFIG.REPORT))
export const loggerDb: Sequelize = new Sequelize(options(MYSQL_CONFIG.LOGGER))

export class CoreDbFactory<T extends Model<any, any>> {
  public readonly main: ModelStatic<T>
  public readonly report: ModelStatic<T>

  constructor (name: string, schema: ModelAttributes, options?: ModelOptions) {
    this.main = mainDb.define<T>(name, schema, options)
    this.report = reportDb.define<T>(name, schema, options)
  }
}

export class LoggerDbFactory<T extends Model<any, any>> {
  public readonly logger: ModelStatic<T>

  constructor (name: string, schema: ModelAttributes, options?: ModelOptions) {
    this.logger = loggerDb.define<T>(name, schema, options)
  }
}
