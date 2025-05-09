import { assert } from 'chai'
import { status as HttpStatus } from 'http-status'
import { RequestApp } from '../test-helper'

describe('Hello Controller', () => {
  before(async () => {})

  after((done) => {
    done()
  })

  describe('GET /hello get message', () => {
    it('should return json message hello world [No Name]', async () => {
      const res = await RequestApp
        .get('/hello')
        .set('Accept', 'application/json')
        .expect(HttpStatus.OK)

      const result = res.body
      assert.equal(result.message, 'hello world [No Name]')
    })

    it('should return json message hello world john', async () => {
      const res = await RequestApp
        .get('/hello/john')
        .set('Accept', 'application/json')
        .expect(HttpStatus.OK)

      const result = res.body
      assert.equal(result.message, 'hello world john')
    })
  })

  describe('POST /hello create message', () => {
    it('should return json message hello world [No Name]', async () => {
      const body = {
        name: 'john doe'
      }

      const res = await RequestApp
        .post('/hello')
        .send(body)
        .set('Accept', 'application/json')
        .expect(HttpStatus.OK)

      const result = res.body
      assert.equal(result.message, 'hello world john doe')
    })
  })

  describe('GET /hello/fail test fail function', () => {
    it('should return error', async () => {
      const res = await RequestApp
        .get('/hello/fail')
        .set('Accept', 'application/json')
        .expect(HttpStatus.IM_A_TEAPOT)

      const result = res.body

      assert.equal(result.name, 'ValidateError')
      assert.equal(result.error, 'This is fail function')
    })
  })
})
