import Express from 'express'
import * as HelloController from '../controllers/hello-controller'

const _router = Express()

_router.get('/hello', HelloController.hello)
_router.get('/hello/:name', HelloController.hello)

export const router = _router
