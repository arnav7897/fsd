// dotenv Basics
// Theory: dotenv loads environment values from `.env` into `process.env`.

const dotenv = require('dotenv');

/**
 * Loads env file values.
 *
 * @param {string} [path='.env']
 * Relative/absolute path of env file.
 * Example: `.env`, `.env.development`
 *
 * @returns {{parsed?: object, error?: Error}}
 * Result object from dotenv. If parsing fails, `error` is present.
 */
function loadEnv(path = '.env') {
  return dotenv.config({ path });
}

/**
 * Reads an env variable with fallback.
 *
 * @param {string} name
 * Environment variable key. Example: `PORT`, `JWT_SECRET`.
 *
 * @param {string} [fallback='']
 * Value returned when env key is missing/empty.
 *
 * @returns {string} Env value or fallback.
 */
function getEnv(name, fallback = '') {
  return process.env[name] || fallback;
}

// Example usage:
// loadEnv('.env');
// const port = getEnv('PORT', '3000');

module.exports = { loadEnv, getEnv };
