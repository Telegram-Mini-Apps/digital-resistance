import { configDotenv } from 'dotenv';
import { resolve } from 'path';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { getApiRouter } from './routers/api.js';
import { cspMiddleware } from './middleware/cspMiddleware.js';
import { authMiddleware } from './middleware/authMiddleware.mjs';

const rootPath = resolve(import.meta.dirname, '..');
const assetsPath = resolve(rootPath, 'build');

// Read environment file.
configDotenv({ path: resolve(rootPath, '.env') });

const botToken = process.env.TELEGRAM_BOT_TOKEN;
if (!botToken) {
  throw new Error('TELEGRAM_BOT_TOKEN is missing');
}

const port = parseInt(process.env.SERVER_PORT || '', 10);
if (!port) {
  throw new Error('SERVER_PORT is missing');
}

const app = express();

// Remove express engine marker.
app.disable('x-powered-by');

app.use(
  // Configure CSP.
  cspMiddleware(),
  // Configure CORS.
  // See: https://www.npmjs.com/package/cors
  cors(),
  // Add HTTP request logger.
  // https://www.npmjs.com/package/morgan
  morgan('combined'),
  // Add requests body JSON parser.
  express.json(),
);

// Add API request processing middleware.
app.use(
  '/api',
  authMiddleware(botToken, 24 * 60 * 60),
  getApiRouter(),
);

// Add static files server. We need this to server the files, generated via CRA (Create React App).
app.use(express.static(assetsPath));
app.use('/*', (_req, res) => {
  res.sendFile(resolve(assetsPath, 'index.html'));
});

app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});

