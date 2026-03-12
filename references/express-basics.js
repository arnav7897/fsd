// Express Basics
// Theory: Express helps you build HTTP APIs with routes + middleware.

const express = require('express');

/**
 * Creates a new Express app and enables JSON body parsing.
 *
 * `express.json()` middleware reads incoming JSON request body
 * and puts the parsed object on `req.body`.
 *
 * @returns {import('express').Express} Express application instance.
 */
function createApp() {
  const app = express();
  app.use(express.json());
  return app;
}

/**
 * Registers beginner-friendly demo routes.
 *
 * @param {import('express').Express} app
 * Express app where routes will be attached.
 *
 * Route details:
 * - GET `/health` -> quick server check.
 * - POST `/echo` -> sends back JSON body from the client.
 */
function registerRoutes(app) {
  app.get('/health', (req, res) => {
    res.json({ ok: true, message: 'Server is healthy' });
  });

  app.post('/echo', (req, res) => {
    res.json({ received: req.body });
  });
}

/**
 * Starts HTTP server from an Express app.
 *
 * @param {import('express').Express} app
 * App returned by `createApp()`.
 *
 * @param {number} [port=3000]
 * Port number where server listens.
 * Example: `3000`, `5000`, `8080`.
 *
 * @returns {import('http').Server} Node HTTP server instance.
 */
function startServer(app, port = 3000) {
  return app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
  });
}

// Example usage:
// const app = createApp();
// registerRoutes(app);
// startServer(app, 3000);

module.exports = { createApp, registerRoutes, startServer };
