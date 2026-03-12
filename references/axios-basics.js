// Axios Basics
// Theory: Axios sends HTTP requests from Node.js.

const axios = require('axios');

/**
 * Sends GET request and returns response body.
 *
 * @param {string} url
 * Full endpoint URL.
 * Example: `https://jsonplaceholder.typicode.com/posts/1`
 *
 * @param {object} [config={}]
 * Optional axios config (headers, params, timeout, etc).
 *
 * @returns {Promise<any>} Parsed JSON/body from server.
 */
async function getJSON(url, config = {}) {
  const response = await axios.get(url, config);
  return response.data;
}

/**
 * Sends POST request with JSON payload.
 *
 * @param {string} url
 * Full endpoint URL.
 *
 * @param {object} [payload={}]
 * Data sent in request body.
 *
 * @param {object} [config={}]
 * Optional axios config (headers, timeout, etc).
 *
 * @returns {Promise<any>} Response body from server.
 */
async function postJSON(url, payload = {}, config = {}) {
  const response = await axios.post(url, payload, config);
  return response.data;
}

/**
 * Creates reusable axios client instance.
 *
 * @param {string} baseURL
 * Base URL prefix for all requests.
 * Example: `https://api.example.com`
 *
 * @param {string} [token]
 * Optional bearer token. If provided, sets `Authorization` header.
 *
 * @param {number} [timeoutMs=5000]
 * Request timeout in milliseconds.
 *
 * @returns {import('axios').AxiosInstance} Configured axios client.
 */
function createApiClient(baseURL, token, timeoutMs = 5000) {
  return axios.create({
    baseURL,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    timeout: timeoutMs,
  });
}

// Example usage:
// const data = await getJSON('https://jsonplaceholder.typicode.com/posts/1');
// const newPost = await postJSON('https://jsonplaceholder.typicode.com/posts', { title: 'Hello' });
// const api = createApiClient('https://api.example.com', 'TOKEN_VALUE', 7000);

module.exports = { getJSON, postJSON, createApiClient };
