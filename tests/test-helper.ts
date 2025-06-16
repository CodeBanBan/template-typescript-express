import '../app/bootstrap'
import * as Redis from '../app/models/redis'

export async function resetRedisTest (): Promise<void> {
  await Redis.redis0.flushdb()
}
