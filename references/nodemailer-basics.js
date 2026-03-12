// Nodemailer Basics
// Theory: Nodemailer sends email from Node.js using SMTP.

const nodemailer = require('nodemailer');

/**
 * Creates SMTP transporter used to send mail.
 *
 * @param {string} host
 * SMTP server host (example: `smtp.gmail.com`).
 *
 * @param {number} port
 * SMTP port. Common: `465` (secure SSL), `587` (STARTTLS).
 *
 * @param {string} user
 * SMTP username/email.
 *
 * @param {string} pass
 * SMTP password or app-password.
 *
 * @returns {import('nodemailer').Transporter} Mail transporter instance.
 */
function createTransporter(host, port, user, pass) {
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

/**
 * Sends an email using transporter.
 *
 * @param {import('nodemailer').Transporter} transporter
 * Transporter created by `createTransporter`.
 *
 * @param {{from: string, to: string, subject: string, text: string}} options
 * Mail fields:
 * - `from`: sender email.
 * - `to`: receiver email (single or comma-separated).
 * - `subject`: email subject line.
 * - `text`: plain text body.
 *
 * @returns {Promise<any>} Send result (`messageId`, response info, etc).
 */
async function sendMail(transporter, options) {
  const { from, to, subject, text } = options;
  return transporter.sendMail({ from, to, subject, text });
}

// Example usage:
// const transporter = createTransporter('smtp.gmail.com', 465, 'me@gmail.com', 'app_password');
// await sendMail(transporter, {
//   from: 'me@gmail.com',
//   to: 'you@example.com',
//   subject: 'Hello',
//   text: 'Test email',
// });

module.exports = { createTransporter, sendMail };
