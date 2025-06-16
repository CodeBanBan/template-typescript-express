import Redis from 'ioredis'
import * as REDIS_CONFIG from '../configs/redis-config'

export const redis0 = new Redis({
  host: REDIS_CONFIG.config.HOST,
  port: REDIS_CONFIG.config.PORT,
  password: REDIS_CONFIG.config.PASSWORD,
  db: 0
})

redis0.on('connect', () => {
  console.log('✅ Connected to Redis');
});

redis0.on('error', (err) => {
  console.error('❌ Redis error:', err);
});
