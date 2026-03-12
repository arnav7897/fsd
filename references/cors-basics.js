// CORS Basics
// Theory: CORS controls which frontend origins can call your API.

const cors = require('cors');

/**
 * Creates CORS middleware with allow-list check.
 *
 * @param {string[]} [allowedOrigins=[]]
 * List of allowed frontend origins.
 * Example: `['http://localhost:5173', 'https://myapp.com']`
 *
 * @param {boolean} [allowCredentials=true]
 * If true, browser can send cookies/authorization credentials.
 *
 * @returns {import('express').RequestHandler} Express middleware.
 */
function createCorsMiddleware(allowedOrigins = [], allowCredentials = true) {
  return cors({
    origin(origin, callback) {
      // `origin` is the request's Origin header.
      // When no origin (like Postman/cURL), allow it by default.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: allowCredentials,
  });
}

// Example usage:
// app.use(createCorsMiddleware(['http://localhost:5173'], true));

module.exports = { createCorsMiddleware };
