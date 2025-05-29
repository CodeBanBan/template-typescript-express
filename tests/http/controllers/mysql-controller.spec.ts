import { assert } from 'chai'
import { status as HttpStatus } from 'http-status'
import { resetMySQLTest } from '../../test-helper'
import { RequestApp } from '../http-test-helper'
import { CatModel } from '../../../app/models/core/cat-model'

describe('Mysql Controller', () => {
  before(async () => {
    await resetMySQLTest()
    await initData()
  })

  after((done) => {
    done()
  })

  describe('GET /mysql get all cat', () => {
    it('should return 3 cats', async () => {
      const res = await RequestApp
        .get('/mysql')
        .set('Accept', 'application/json')
        .expect(HttpStatus.OK)

      const result = res.body

      assert.strictEqual(result.catList.length, 3)
    })
  })

  describe('GET /mysql/detail/:name get cat detail by name', () => {
    it('should return cat detail name alan', async () => {
      const res = await RequestApp
        .get('/mysql/detail/alan')
        .set('Accept', 'application/json')
        .expect(HttpStatus.OK)

      const result = res.body

      assert.strictEqual(result.name, 'alan')
    })

    it('should return 404 NOT_FOUND when name not exist', async () => {
      await RequestApp
        .get('/mysql/detail/not-exist')
        .set('Accept', 'application/json')
        .expect(HttpStatus.NOT_FOUND)
    })
  })
})

describe('POST /mysql create cat', () => {
  it('should create cat name zaza success', async () => {
    const body = {
      name: 'zaza'
    }

    const res = await RequestApp
      .post('/mysql')
      .send(body)
      .set('Accept', 'application/json')
      .expect(HttpStatus.OK)

    const result = res.body

    assert.isNumber(result.id)
    assert.strictEqual(result.name, 'zaza')
  })

  it('should return 422 UNPROCESSABLE_ENTITY error when empty name', async () => {
    const body = {
      name: ''
    }

    await RequestApp
      .post('/mysql')
      .send(body)
      .set('Accept', 'application/json')
      .expect(HttpStatus.UNPROCESSABLE_ENTITY)
  })

  it('should return 422 UNPROCESSABLE_ENTITY error when no key name', async () => {
    const body = {
      foo: 'zaza'
    }

    await RequestApp
      .post('/mysql')
      .send(body)
      .set('Accept', 'application/json')
      .expect(HttpStatus.UNPROCESSABLE_ENTITY)
  })
})

const CAT_LIST = [
  { name: 'john' },
  { name: 'alan' },
  { name: 'jojo' }
]

async function initData (): Promise<void> {
  const promises = CAT_LIST.map(async (item) => {
    return await CatModel.main.create(item)
  })

  await Promise.all(promises)
}
