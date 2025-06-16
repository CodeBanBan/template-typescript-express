import type { Request, Response } from 'express'
import * as RedisCache from '../../app/models/redis-cache'

export async function getSample (req: Request, res: Response): Promise<void> {
  const cacheData = await RedisCache.getSampleCache()
  console.log('Redis get: ' + cacheData)

  res.json({ data: cacheData })
}

export async function setSample (req: Request, res: Response): Promise<void> {
  const value: string = req.params.value ?? '[No Name]'

  await RedisCache.setSampleCache(value)

  res.json({ ok: true })
}

export async function deleteSampleCache (req: Request, res: Response): Promise<void> {
  await RedisCache.deleteSampleCache()

  res.json({ ok: true })
}
