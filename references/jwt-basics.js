// JSON Web Token (jsonwebtoken) Basics
// Theory: JWT is used to sign and verify user/session claims.

const jwt = require('jsonwebtoken');

/**
 * Creates a signed JWT string.
 *
 * @param {object} payload
 * Data you want inside token (example: `{ userId: '123', role: 'admin' }`).
 *
 * @param {string} secret
 * Secret key used to sign token. Must match verify secret.
 *
 * @param {string|number} [expiresIn='1h']
 * Token lifetime. Example: `'15m'`, `'7d'`, `3600` (seconds).
 *
 * @returns {string} Signed JWT token.
 */
function signAccessToken(payload, secret, expiresIn = '1h') {
  return jwt.sign(payload, secret, { expiresIn });
}

/**
 * Verifies token signature + expiry.
 *
 * @param {string} token
 * JWT string from header/cookie.
 *
 * @param {string} secret
 * Same signing secret used in `signAccessToken`.
 *
 * @returns {object|string} Decoded payload if token is valid.
 * Throws error if token is expired/invalid.
 */
function verifyAccessToken(token, secret) {
  return jwt.verify(token, secret);
}

/**
 * Decodes payload without checking signature.
 *
 * Use this only for quick inspection, not for auth.
 *
 * @param {string} token JWT string.
 * @returns {object|string|null} Decoded data or `null` if malformed.
 */
function decodeTokenWithoutVerify(token) {
  return jwt.decode(token);
}

// Example usage:
// const token = signAccessToken({ userId: 'u1' }, 'MY_SECRET', '1h');
// const payload = verifyAccessToken(token, 'MY_SECRET');
// const decoded = decodeTokenWithoutVerify(token);

module.exports = { signAccessToken, verifyAccessToken, decodeTokenWithoutVerify };
