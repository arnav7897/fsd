// UUID Basics
// Theory: UUID generates unique IDs for records, requests, and tokens.

const { v4: uuidv4, validate: isUUID } = require('uuid');

/**
 * Generates random UUID v4 string.
 *
 * @returns {string} UUID like `550e8400-e29b-41d4-a716-446655440000`.
 */
function generateId() {
  return uuidv4();
}

/**
 * Checks if a string is valid UUID format.
 *
 * @param {string} id
 * ID string to validate.
 *
 * @returns {boolean} `true` if valid UUID, otherwise `false`.
 */
function validateId(id) {
  return isUUID(id);
}

// Example usage:
// const id = generateId();
// const ok = validateId(id);

module.exports = { generateId, validateId };
