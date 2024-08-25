import { createClient } from 'redis';
import { configDotenv } from 'dotenv';

configDotenv();

const redisClient = createClient({
    url: process.env.REDIS_URL,
});

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
    console.error('Redis error: ', err);
});

process.on('exit', () => redisClient.quit());

process.on('SIGINT', () => {
    redisClient.quit();
    process.exit();
});

export default redisClient;
