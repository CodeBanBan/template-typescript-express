export class HelloDomain {
  public debugText: string = ''

  private readonly _defaultName: string = ''

  constructor (name: string = 'John Doe') {
    this._defaultName = name
  }

  helloWithName (name: string = '[No Name]'): string {
    this._debugHello(name)

    return `hello world ${name}`
  }

  private _debugHello (name: string): void {
    this.debugText = (name !== null && name !== '') ? name : this._defaultName
  }
}
