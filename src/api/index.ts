import cookieParser from 'cookie-parser';
import { configDotenv } from 'dotenv';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { attachCSRFController } from './controllers/csrf';
import { hostnameMiddleware } from './hostnameMiddleware';
import redisClient from './redisClient';
import cors from 'cors';

import { attachAnalyticsController } from './controllers/analytics';
import {
  FRAME_ANCESSORS,
  TRUSTED_CONNECT_PROVIDERS,
  TRUSTED_IMG_PROVIDES,
  TRUSTED_SCRIPT_SRC_PROVIDERS,
  TRUSTED_WORKER_PROVIDERS,
} from './trustedDomains';

import {
  csrfTokenMiddleware,
  verifyCsrfToken,
} from './middleware/csrfProtection';
import { attachPetitionsController } from './controllers/petitions';

configDotenv({ path: path.join(__dirname, '../../.env') });

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(cors());
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        'script-src': TRUSTED_SCRIPT_SRC_PROVIDERS,
        'connect-src': TRUSTED_CONNECT_PROVIDERS,
        'img-src': TRUSTED_IMG_PROVIDES,
        'frame-ancestors': FRAME_ANCESSORS,
        'worker-src': TRUSTED_WORKER_PROVIDERS,
      },
    },
    xFrameOptions: false,
  }));
  app.disable('x-powered-by');
  app.use(hostnameMiddleware);

  app.options('*', cors());
}

app.use(morgan('combined'));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../../build')));

attachCSRFController(app);
attachAnalyticsController(app);
attachPetitionsController(app);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

redisClient.on('connect', () => {
  console.log('Connecting to Redis...');
});

redisClient.on('ready', () => {
  console.log('Connected to Redis');
});

redisClient.on('end', () => {
  console.log('Redis connection closed');
});

redisClient.on('error', (err) => {
  console.error('Redis connection error:', err);
});


redisClient.connect().then(() => {
  const port = process.env.NODE_ENV === 'production'
    ? process.env.PRODUCTION_SERVER_PORT
    : process.env.DEVELOPMENT_SERVER_PORT;

  app.listen(port, function () {
    console.log('Express server listening on port ' + port);
  });
}).catch((err) => {
  console.error('Failed to connect to Redis:', err);
});
