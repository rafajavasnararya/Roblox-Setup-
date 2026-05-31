import { Queue, Worker, QueueOptions } from 'bullmq';
import { createClient } from 'redis';

const redisConnection = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
};

// Queue Configuration
const queueOptions: QueueOptions = {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
    removeOnComplete: true,
    removeOnFail: false,
  },
};

// Queues
export const conversionQueue = new Queue('video-conversion', queueOptions);
export const thumbnailQueue = new Queue('thumbnail-generation', queueOptions);
export const assetExtractionQueue = new Queue('asset-extraction', queueOptions);

// Queue Event Handlers
conversionQueue.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed:`, err.message);
});

conversionQueue.on('completed', (job) => {
  console.log(`Job ${job?.id} completed successfully`);
});

export async function initializeQueues() {
  try {
    const client = createClient({ ...redisConnection });
    await client.connect();
    console.log('✓ Redis queues initialized');
    await client.quit();
  } catch (error) {
    console.error('✗ Failed to initialize queues:', error);
    throw error;
  }
}
