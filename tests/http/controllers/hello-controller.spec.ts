import { assert } from 'chai'
import { RequestApp } from '../test-helper'

describe('Hello Controller', () => {
  before(async () => {})

  after((done) => {
    done()
  })

  describe('#hello', () => {
    it('should return json message hello world [No Name]', async () => {
      const res = await RequestApp
        .get('/hello')
        .set('Accept', 'application/json')
        .expect(200)

      const result = res.body
      assert.equal(result.message, 'hello world [No Name]')
    })

    it('should return json message hello world john', async () => {
      const res = await RequestApp
        .get('/hello/john')
        .set('Accept', 'application/json')
        .expect(200)

      const result = res.body
      assert.equal(result.message, 'hello world john')
    })
  })
})
