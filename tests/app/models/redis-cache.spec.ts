import { assert } from 'chai'
import { resetRedisTest } from '../../test-helper'
import * as RedisCache from '../../../app/models/redis-cache'

describe('Redis-Cache', () => {
  before(async () => {
    await resetRedisTest()
  })

  after((done) => {
    done()
  })

  describe('simple-cache', () => {
    it('should return null when no data in cache', async () => {
      const data = await RedisCache.getSampleCache()

      assert.isNull(data)
    })

    it('should return hello-cache when set cache', async () => {
      await RedisCache.setSampleCache('hello-cache')

      const data = await RedisCache.getSampleCache()

      assert.strictEqual(data, 'hello-cache')
    })

    it('should return null when delete cache', async () => {
      await RedisCache.setSampleCache('hello-cache')
      await RedisCache.deleteSampleCache()

      const data = await RedisCache.getSampleCache()

      assert.isNull(data)
    })
  })
})
