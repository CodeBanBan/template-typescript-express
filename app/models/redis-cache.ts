import * as Redis from './redis'

const EXPIRE = {
  IN_SECONDS: 'EX',
  IN_MILLISECONDS: 'PX',
  AT_UNIX_TIME_SECONDS: 'EXAT',
  AT_UNIX_TIME_MILLISECONDS: 'PXAT'
} as const

const SAMPLE_KEY = 'sampleKey'

export async function getSampleCache (): Promise<string | null> {
  const cacheData = await _getCache<string>(SAMPLE_KEY)

  return cacheData
}

export async function setSampleCache (value: string): Promise<void> {
  await _setCache(SAMPLE_KEY, value, EXPIRE.IN_SECONDS, 10)
}

export async function deleteSampleCache (): Promise<void> {
  await Redis.redis0.del(SAMPLE_KEY)
}

async function _getCache<T> (key: string): Promise<T | null> {
  const jsonString = await Redis.redis0.get(key)

  return (jsonString !== null) ? JSON.parse(jsonString) : null
}

async function _setCache<T> (key: string, value: T, expireMode = EXPIRE.IN_SECONDS, expireValue: number = 60): Promise<void> {
  const jsonString = JSON.stringify(value)

  await Redis.redis0.set(SAMPLE_KEY, jsonString, expireMode, expireValue)
}
