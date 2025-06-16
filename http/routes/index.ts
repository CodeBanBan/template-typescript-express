import Express from 'express'
import * as HelloRoute from './hello-route'
import * as MysqlRoute from './mysql-route'
import * as RedisRoute from './redis-route'

const _router = Express()

_router.use('/hello', HelloRoute.router)
_router.use('/mysql', MysqlRoute.router)
_router.use('/redis', RedisRoute.router)

export const router = _router
