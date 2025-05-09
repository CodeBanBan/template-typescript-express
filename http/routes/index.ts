import Express from 'express'
import * as HelloRoute from './hello-route'

const _router = Express()

_router.use('/hello', HelloRoute.router)

export const router = _router
