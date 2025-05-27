import { DataTypes, type Model } from 'sequelize'
import { CoreDbFactory } from '../db'

const NAME = 'cats'
const SCHEMA = {
  id: {
    field: 'cat_id',
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  name: DataTypes.STRING(100)
}
const OPTIONS = {
  tableName: 'cats'
}

export interface CatDto extends Model {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

export const CatModel = new CoreDbFactory<CatDto>(NAME, SCHEMA, OPTIONS)
