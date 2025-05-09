import Express from 'express'
import * as HelloController from '../controllers/hello-controller'

const _router = Express()

_router.get('/', HelloController.hello)
_router.post('/', HelloController.create)
_router.get('/fail', HelloController.fail)

_router.get('/:name', HelloController.hello)

export const router = _router
