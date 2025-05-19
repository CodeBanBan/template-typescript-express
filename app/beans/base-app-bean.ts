export class BaseAppBean {
  private static readonly FALSE_STRING_VALUES = ['0', 'false', '']

  public castToString (rawValue: unknown, defaultValue: string = ''): string {
    if (rawValue === undefined || rawValue === null) {
      return defaultValue
    }

    switch (typeof rawValue) {
      case 'string':
        return rawValue
      case 'boolean':
        return (rawValue) ? 'true' : 'false'
      case 'number':
        return String(rawValue)
    }

    return defaultValue
  }

  public castToNumber (rawValue: unknown, defaultValue: number = 0): number {
    if (rawValue === undefined || rawValue === null) {
      return defaultValue
    }

    switch (typeof rawValue) {
      case 'number':
        return rawValue
      case 'boolean':
        return (rawValue) ? 1 : 0
      case 'string':
        return this._stringToNumber(rawValue, defaultValue)
    }

    return defaultValue
  }

  public castToBoolean (rawValue: unknown, defaultValue: boolean = false): boolean {
    if (rawValue === undefined || rawValue === null) {
      return defaultValue
    }

    switch (typeof rawValue) {
      case 'boolean':
        return rawValue
      case 'number':
        return (rawValue > 0)
      case 'string':
        return this._stringToBoolean(rawValue)
    }

    return defaultValue
  }

  private _stringToBoolean (value: string): boolean {
    const normalizedString: string = value.toLowerCase().trim()
    const isFalseString: boolean = BaseAppBean.FALSE_STRING_VALUES.includes(normalizedString)

    if (isFalseString) {
      return false
    }

    const parsedNumber: number = this._stringToNumber(normalizedString, 1)
    return (parsedNumber > 0)
  }

  private _stringToNumber (value: string, defaultValue: number): number {
    const parsedValue = Number(value)

    return isNaN(parsedValue) ? defaultValue : parsedValue
  }
}
