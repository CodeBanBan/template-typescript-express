import type { Request, Response } from 'express'
import '../app/bootstrap'
import * as Server from '../http/server'

const isListen = true

Server.app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

if (isListen) {
  const port = Number(process.env.HTTP_API_PORT) ?? 3001

  Server.app.listen(port, () => {
    console.log(`API Running on port: ${port}`)
  })
}

export const app = Server.app
