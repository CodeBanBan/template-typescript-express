import { assert } from 'chai'
import { HelloDomain } from '../../../app/domains/hello-domain'

describe('Hello Domain', () => {
  let helloDomain: HelloDomain

  before(async () => {
    helloDomain = new HelloDomain()
  })

  after((done) => {
    done()
  })

  describe('#helloWithName', () => {
    it('should return "hello world [No Name]" when no name', async () => {
      const result: string = helloDomain.helloWithName()
      const debugText: string = helloDomain.debugText

      assert.strictEqual(result, 'hello world [No Name]')
      assert.strictEqual(debugText, '[No Name]')
    })

    it('should return "hello world Boba" when name is "Boba"', async () => {
      const result: string = helloDomain.helloWithName('Boba')
      const debugText: string = helloDomain.debugText

      assert.strictEqual(result, 'hello world Boba')
      assert.strictEqual(debugText, 'Boba')
    })

    it('should return "hello world John Doe" when empty name', async () => {
      const result: string = helloDomain.helloWithName('')
      const debugText: string = helloDomain.debugText

      assert.strictEqual(result, 'hello world')
      assert.strictEqual(debugText, 'John Doe')
    })

    it('should return debugText "new-text" when new Domain with "new-text"', async () => {
      const domain: HelloDomain = new HelloDomain('new-text')

      const result: string = domain.helloWithName('')
      const debugText: string = domain.debugText

      assert.strictEqual(result, 'hello world')
      assert.strictEqual(debugText, 'new-text')
    })
  })
})
