import Express from 'express'
import Cors from 'cors'
import BodyParser from 'body-parser'
import '../app/bootstrap'
import * as Routes from './routes'
import * as ErrorHandlerMw from './middlewares/error-handler-middleware'

const _server = Express()

const corsOptions = {
  origin: process.env.HTTP_CORS_ORIGIN ?? '*'
}

_server.use(Cors(corsOptions))
_server.use(BodyParser.json({ limit: '15mb' }))

_server.use('', Routes.router)

_server.use(ErrorHandlerMw.handler)

export const app = _server
