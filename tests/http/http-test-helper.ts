import Request from 'supertest'
import * as HttpServer from '../../http/server'

export const RequestApp = Request(HttpServer.app)
