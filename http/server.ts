import Express from 'express'
import Cors from 'cors'
import BodyParser from 'body-parser'

const _server = Express()

const corsOptions = {
  origin: process.env.HTTP_CORS_ORIGIN ?? '*'
}

_server.use(Cors(corsOptions))

_server.use(BodyParser.json({ limit: '15mb' }))

export const app = _server
