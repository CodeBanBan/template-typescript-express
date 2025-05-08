import { assert, expect } from 'chai'
import { RequestApp } from './test-helper'

describe('Sample tests HttpServer', () => {
  it('should return Hello World', async () => {
    const res = await RequestApp
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)

    const result = res.body

    // BDD Style
    expect(result).to.have.property('data', 'hello world')

    // TDD Style
    assert.equal(result.data, 'hello world')
  })
})
