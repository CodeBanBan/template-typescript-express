import * as Server from './app/server'

const isListen = true

if (isListen) {
  const port = 3001

  Server.app.listen(port, () => {
    console.log(`API Running on port: ${port}`)
  })
}

export const app = Server.app
