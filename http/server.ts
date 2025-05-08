import Express, {type Request, type Response} from 'express'
import Cors from 'cors'
import BodyParser from 'body-parser'
import '../app/bootstrap'

const _server = Express()

const corsOptions = {
  origin: process.env.HTTP_CORS_ORIGIN ?? '*'
}

_server.use(Cors(corsOptions))

_server.use(BodyParser.json({ limit: '15mb' }))

_server.get('/', (req: Request, res: Response) => {
  res.json({ data: 'hello world'})
})

export const app = _server
