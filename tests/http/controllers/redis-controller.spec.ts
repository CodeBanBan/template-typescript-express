import { assert } from 'chai'
import { status as HttpStatus } from 'http-status'
import { RequestApp } from '../test-helper'
import { resetRedisTest } from '../../test-helper'

describe('Redis Controller', () => {
  before(async () => {
    await resetRedisTest()
  })

  after((done) => {
    done()
  })

  describe('Sample Redis Cache', () => {
    it('should return null when cache not set', async () => {
      const res = await RequestApp
        .get('/redis')
        .set('Accept', 'application/json')
        .expect(HttpStatus.OK)

      const result = res.body
      assert.isNull(result.data)
    })

    it('should return hello-cache when cache set', async () => {
      await RequestApp
        .post('/redis/hello-cache')
        .set('Accept', 'application/json')
        .expect(HttpStatus.OK)

      const res = await RequestApp
        .get('/redis')
        .set('Accept', 'application/json')
        .expect(HttpStatus.OK)

      const result = res.body
      assert.strictEqual(result.data, 'hello-cache')
    })

    it('should return null when cache delete', async () => {
      await RequestApp
        .post('/redis/hello-cache')
        .set('Accept', 'application/json')
        .expect(HttpStatus.OK)

      await RequestApp
        .delete('/redis')
        .set('Accept', 'application/json')
        .expect(HttpStatus.OK)

      const res = await RequestApp
        .get('/redis')
        .set('Accept', 'application/json')
        .expect(HttpStatus.OK)

      const result = res.body
      assert.isNull(result.data)
    })
  })
})
