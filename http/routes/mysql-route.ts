import Express from 'express'
import * as MysqlController from '../controllers/mysql-controller'

const _router = Express()

_router.post('/', MysqlController.create)
_router.get('/', MysqlController.list)
_router.get('/detail/:name', MysqlController.detail)

export const router = _router
