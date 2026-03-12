// Morgan Basics
// Theory: Morgan logs HTTP request details in Express.

const morgan = require('morgan');

/**
 * Creates colorful short logs for development.
 *
 * Format includes method, URL, status, response time.
 *
 * @returns {import('express').RequestHandler} Express logging middleware.
 */
function createDevLogger() {
  return morgan('dev');
}

/**
 * Creates Apache-style detailed logs.
 *
 * Useful for production/file logging.
 *
 * @returns {import('express').RequestHandler} Express logging middleware.
 */
function createCombinedLogger() {
  return morgan('combined');
}

/**
 * Creates custom format logger.
 *
 * @param {string} [format=':method :url :status :response-time ms']
 * Morgan format string.
 * Tokens:
 * - `:method` -> HTTP method.
 * - `:url` -> route path.
 * - `:status` -> response status code.
 * - `:response-time` -> time in ms.
 *
 * @returns {import('express').RequestHandler} Express logging middleware.
 */
function createCustomLogger(format = ':method :url :status :response-time ms') {
  return morgan(format);
}

// Example usage:
// app.use(createDevLogger());
// app.use(createCustomLogger(':method :url :status'));

module.exports = { createDevLogger, createCombinedLogger, createCustomLogger };
