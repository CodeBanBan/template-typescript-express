import { DataTypes, type Model } from 'sequelize'
import { LoggerDbFactory } from '../db'

const NAME = 'history'
const SCHEMA = {
  id: {
    field: 'id',
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  memo: DataTypes.STRING(100)
}
const OPTIONS = {
  tableName: 'history'
}

export interface HistoryDto extends Model {
  id: number
  memo: string
  createdAt: Date
  updatedAt: Date
}

export const HistoryModel = new LoggerDbFactory<HistoryDto>(NAME, SCHEMA, OPTIONS)
