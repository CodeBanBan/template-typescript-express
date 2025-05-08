import * as Server from '../http/server'

const port = Number(process.env.HTTP_API_PORT) ?? 3001

Server.app.listen(port, () => {
  console.log(`API Running on port: ${port}`)
})
