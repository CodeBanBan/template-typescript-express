import { assert } from 'chai'
import { BaseAppBean } from '../../../app/beans/base-app-bean'

describe('Base App Bean', () => {
  let appBean: BaseAppBean

  before(async () => {
    appBean = new BaseAppBean()
  })

  after((done) => {
    done()
  })

  describe('#castToString', () => {
    describe(('case: rawValue is string type'), () => {
      it('should return "hello-value" when rawValue is "hello-value"', () => {
        const result: string = appBean.castToString('hello-value')

        assert.strictEqual(result, 'hello-value')
      })
    })

    describe(('case: rawValue is number type'), () => {
      it('should return "123" when rawValue is 123', () => {
        const result: string = appBean.castToString(123)

        assert.strictEqual(result, '123')
      })

      it('should return "0" when rawValue is 0', () => {
        const result: string = appBean.castToString(0)

        assert.strictEqual(result, '0')
      })

      it('should return "-99999" when rawValue is -99999', () => {
        const result: string = appBean.castToString(-99999)

        assert.strictEqual(result, '-99999')
      })
    })

    describe(('case: rawValue is boolean type'), () => {
      it('should return "true" when rawValue is true', () => {
        const result: string = appBean.castToString(true)

        assert.strictEqual(result, 'true')
      })

      it('should return "false" when rawValue is false', () => {
        const result: string = appBean.castToString(false)

        assert.strictEqual(result, 'false')
      })
    })

    describe(('case: rawValue is other type'), () => {
      it('should return "" when rawValue is date type', () => {
        const result: string = appBean.castToString(new Date())

        assert.strictEqual(result, '')
      })

      it('should return "" when rawValue is object type', () => {
        const result: string = appBean.castToString({})

        assert.strictEqual(result, '')
      })

      it('should return "" when rawValue is array type', () => {
        const result: string = appBean.castToString([])

        assert.strictEqual(result, '')
      })

      it('should return "test-value" when rawValue is date type and default value is "test-value"', () => {
        const result: string = appBean.castToString(new Date(), 'test-value')

        assert.strictEqual(result, 'test-value')
      })

      it('should return "test-value" when rawValue is object type and default value is "test-value"', () => {
        const result: string = appBean.castToString({}, 'test-value')

        assert.strictEqual(result, 'test-value')
      })

      it('should return "test-value" when rawValue is array type and default value is "test-value"', () => {
        const result: string = appBean.castToString([], 'test-value')

        assert.strictEqual(result, 'test-value')
      })
    })

    describe(('case: rawValue is undefined or null'), () => {
      it('should return "" when rawValue is undefined', () => {
        const result: string = appBean.castToString(undefined)

        assert.strictEqual(result, '')
      })

      it('should return "" when rawValue is null', async () => {
        const result: string = appBean.castToString(null)

        assert.strictEqual(result, '')
      })

      it('should return "test-value" when rawValue is undefined and default value is "test-value"', async () => {
        const result: string = appBean.castToString(undefined, 'test-value')

        assert.strictEqual(result, 'test-value')
      })

      it('should return "test-value" when rawValue is undefined and null value is "test-value"', async () => {
        const result: string = appBean.castToString(null, 'test-value')

        assert.strictEqual(result, 'test-value')
      })
    })
  })

  describe('#castToNumber', () => {
    describe(('case: rawValue is string type'), () => {
      it('should return 234 when rawValue is "234"', () => {
        const result: number = appBean.castToNumber('234')

        assert.strictEqual(result, 234)
      })

      it('should return 0 when rawValue is "0"', () => {
        const result: number = appBean.castToNumber('0')

        assert.strictEqual(result, 0)
      })

      it('should return -88 when rawValue is "-88"', () => {
        const result: number = appBean.castToNumber('-88')

        assert.strictEqual(result, -88)
      })

      it('should return 0 when rawValue is "invalid-value"', () => {
        const result: number = appBean.castToNumber('invalid-value')

        assert.strictEqual(result, 0)
      })

      it('should return -777 when rawValue is "invalid-value" and default value is -777', () => {
        const result: number = appBean.castToNumber('invalid-value', -777)

        assert.strictEqual(result, -777)
      })
    })

    describe(('case: rawValue is number type'), () => {
      it('should return 123 when rawValue is 123', () => {
        const result: number = appBean.castToNumber(123)

        assert.strictEqual(result, 123)
      })

      it('should return 0 when rawValue is 0', () => {
        const result: number = appBean.castToNumber(0)

        assert.strictEqual(result, 0)
      })

      it('should return -99999 when rawValue is -99999', () => {
        const result: number = appBean.castToNumber(-99999)

        assert.strictEqual(result, -99999)
      })
    })

    describe(('case: rawValue is boolean type'), () => {
      it('should return 1 when rawValue is true', () => {
        const result: number = appBean.castToNumber(true)

        assert.strictEqual(result, 1)
      })

      it('should return 0 when rawValue is false', () => {
        const result: number = appBean.castToNumber(false)

        assert.strictEqual(result, 0)
      })
    })

    describe(('case: rawValue is other type'), () => {
      it('should return 0 when rawValue is date type', () => {
        const result: number = appBean.castToNumber(new Date())

        assert.strictEqual(result, 0)
      })

      it('should return 0 when rawValue is object type', () => {
        const result: number = appBean.castToNumber({})

        assert.strictEqual(result, 0)
      })

      it('should return 0 when rawValue is array type', () => {
        const result: number = appBean.castToNumber([])

        assert.strictEqual(result, 0)
      })

      it('should return -55 when rawValue is date type and default value is -55', () => {
        const result: number = appBean.castToNumber(new Date(), -55)

        assert.strictEqual(result, -55)
      })

      it('should return -55 when rawValue is object type and default value is -55', () => {
        const result: number = appBean.castToNumber({}, -55)

        assert.strictEqual(result, -55)
      })

      it('should return -55 when rawValue is array type and default value is -55', () => {
        const result: number = appBean.castToNumber([], -55)

        assert.strictEqual(result, -55)
      })
    })

    describe(('case: rawValue is undefined or null'), () => {
      it('should return 0 when rawValue is undefined', () => {
        const result: number = appBean.castToNumber(undefined)

        assert.strictEqual(result, 0)
      })

      it('should return 0 when rawValue is null', async () => {
        const result: number = appBean.castToNumber(null)

        assert.strictEqual(result, 0)
      })

      it('should return -99 when rawValue is -99 and default value is -99', async () => {
        const result: number = appBean.castToNumber(undefined, -99)

        assert.strictEqual(result, -99)
      })

      it('should return -99 when rawValue is -99 and default value is -99', async () => {
        const result: number = appBean.castToNumber(null, -99)

        assert.strictEqual(result, -99)
      })
    })
  })

  describe('#castToBoolean', () => {
    describe(('case: rawValue is string type'), () => {
      it('should return true when rawValue is "true"', () => {
        const result: boolean = appBean.castToBoolean('true')

        assert.strictEqual(result, true)
      })

      it('should return true when rawValue is "normal-value"', () => {
        const result: boolean = appBean.castToBoolean('normal-value')

        assert.strictEqual(result, true)
      })

      it('should return false when rawValue is "-99"', () => {
        const result: boolean = appBean.castToBoolean('-99')

        assert.strictEqual(result, false)
      })

      it('should return false when rawValue is "false"', () => {
        const result: boolean = appBean.castToBoolean('false')

        assert.strictEqual(result, false)
      })

      it('should return false when rawValue is "0"', () => {
        const result: boolean = appBean.castToBoolean('0')

        assert.strictEqual(result, false)
      })

      it('should return false when rawValue is ""', () => {
        const result: boolean = appBean.castToBoolean('')

        assert.strictEqual(result, false)
      })
    })

    describe(('case: rawValue is number type'), () => {
      it('should return true when rawValue is 123', () => {
        const result: boolean = appBean.castToBoolean(123)

        assert.strictEqual(result, true)
      })

      it('should return false when rawValue is 0', () => {
        const result: boolean = appBean.castToBoolean(0)

        assert.strictEqual(result, false)
      })

      it('should return false when rawValue is -99999', () => {
        const result: boolean = appBean.castToBoolean(-99999)

        assert.strictEqual(result, false)
      })
    })

    describe(('case: rawValue is boolean type'), () => {
      it('should return true when rawValue is true', () => {
        const result: boolean = appBean.castToBoolean(true)

        assert.strictEqual(result, true)
      })

      it('should return false when rawValue is false', () => {
        const result: boolean = appBean.castToBoolean(false)

        assert.strictEqual(result, false)
      })
    })

    describe(('case: rawValue is other type'), () => {
      it('should return false when rawValue is date type', () => {
        const result: boolean = appBean.castToBoolean(new Date())

        assert.strictEqual(result, false)
      })

      it('should return false when rawValue is object type', () => {
        const result: boolean = appBean.castToBoolean({})

        assert.strictEqual(result, false)
      })

      it('should return false when rawValue is array type', () => {
        const result: boolean = appBean.castToBoolean([])

        assert.strictEqual(result, false)
      })

      it('should return true when rawValue is date type and default value is true', () => {
        const result: boolean = appBean.castToBoolean(new Date(), true)

        assert.strictEqual(result, true)
      })

      it('should return true when rawValue is object type and default value is true', () => {
        const result: boolean = appBean.castToBoolean({}, true)

        assert.strictEqual(result, true)
      })

      it('should return true when rawValue is array type and default value is true', () => {
        const result: boolean = appBean.castToBoolean([], true)

        assert.strictEqual(result, true)
      })
    })

    describe(('case: rawValue is undefined or null'), () => {
      it('should return false when rawValue is undefined', () => {
        const result: boolean = appBean.castToBoolean(undefined)

        assert.strictEqual(result, false)
      })

      it('should return false when rawValue is null', async () => {
        const result: boolean = appBean.castToBoolean(null)

        assert.strictEqual(result, false)
      })

      it('should return true when rawValue is undefined and default value is true', async () => {
        const result: boolean = appBean.castToBoolean(undefined, true)

        assert.strictEqual(result, true)
      })

      it('should return true when rawValue is undefined and null value is true', async () => {
        const result: boolean = appBean.castToBoolean(null, true)

        assert.strictEqual(result, true)
      })
    })
  })
})
