import { QueryTypes } from 'sequelize'
import * as Db from '../models/db'
import { type CatDto, CatModel } from '../models/core/cat-model'

export async function add (name: string): Promise<void> {
  const params = {
    name
  }

  await CatModel.main.create(params)
}

export async function list (): Promise<CatDto[]> {
  const resultList: CatDto[] = await CatModel.report.findAll()

  return resultList
}

export async function findByName (name: string): Promise<CatDto | null> {
  const sql: string = 'SELECT * FROM cats WHERE name = :name'

  const params = {
    name
  }

  const options = {
    replacements: params,
    type: QueryTypes.SELECT,
    mapToModel: true,
    model: CatModel.report
  }

  const result: CatDto[] | null = await Db.reportDb.query<CatDto>(sql, options)

  return (result.length > 0) ? result[0] : null
}
