// Joi Basics
// Theory: Joi validates objects with schema rules.

const Joi = require('joi');

/**
 * Creates a signup validation schema.
 *
 * Rules:
 * - name: string, min 2 chars.
 * - email: valid email format.
 * - password: string, min 6 chars.
 *
 * @returns {import('joi').ObjectSchema} Joi object schema.
 */
function createSignupSchema() {
  return Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
}

/**
 * Validates input data against a Joi schema.
 *
 * @param {import('joi').Schema} schema
 * Joi schema object created by Joi methods.
 *
 * @param {object} data
 * Data object to validate.
 *
 * @returns {{value: any, error?: import('joi').ValidationError}}
 * Validation result. If invalid, `error` contains details.
 */
function validateData(schema, data) {
  return schema.validate(data, { abortEarly: false });
}

// Example usage:
// const schema = createSignupSchema();
// const result = validateData(schema, {
//   name: 'Arnav',
//   email: 'arnav@example.com',
//   password: 'secret123',
// });

module.exports = { createSignupSchema, validateData };
