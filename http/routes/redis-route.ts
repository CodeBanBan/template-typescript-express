import Express from 'express'
import * as RedisController from '../controllers/redis-controller'

const _router = Express()

_router.get('/', RedisController.getSample)
_router.post('/:value', RedisController.setSample)
_router.delete('/', RedisController.deleteSampleCache)

export const router = _router
