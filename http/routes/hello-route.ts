import Express from 'express'
import * as HelloController from '../controllers/hello-controller'

const _router = Express()

_router.get('/', HelloController.hello)
_router.get('/:name', HelloController.hello)
_router.post('/', HelloController.create)

export const router = _router
