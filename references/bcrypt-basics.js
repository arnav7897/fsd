// Bcrypt Basics
// Theory: bcrypt hashes passwords and compares plain text with hash.

const bcrypt = require('bcrypt');

/**
 * Converts plain password into secure hash.
 *
 * @param {string} password
 * User's plain password text.
 *
 * @param {number} [saltRounds=10]
 * Cost factor. Higher value = slower hashing but stronger brute-force resistance.
 * Common beginner value is `10` or `12`.
 *
 * @returns {Promise<string>} Hashed password string.
 */
async function hashPassword(password, saltRounds = 10) {
  return bcrypt.hash(password, saltRounds);
}

/**
 * Checks if entered password matches stored hash.
 *
 * @param {string} password
 * Plain password from login form.
 *
 * @param {string} hashedPassword
 * Hashed password from database.
 *
 * @returns {Promise<boolean>} `true` if match, otherwise `false`.
 */
async function comparePassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

// Example usage:
// const hash = await hashPassword('myPass123', 10);
// const ok = await comparePassword('myPass123', hash);

module.exports = { hashPassword, comparePassword };
