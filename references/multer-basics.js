// Multer Basics
// Theory: Multer handles multipart/form-data (file uploads) in Express.

const multer = require('multer');

/**
 * Creates multer uploader that stores uploaded files in RAM.
 *
 * @param {number} [maxFileSizeBytes=2097152]
 * Maximum file size in bytes.
 * `2097152` bytes = 2MB.
 *
 * @returns {import('multer').Multer} Multer uploader instance.
 */
function createMemoryUploader(maxFileSizeBytes = 2 * 1024 * 1024) {
  return multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: maxFileSizeBytes },
  });
}

/**
 * Creates middleware for one file field.
 *
 * @param {string} [fieldName='file']
 * Name of the HTML form field carrying file.
 * Example: `<input type=\"file\" name=\"avatar\" />` -> use `'avatar'`.
 *
 * @param {number} [maxFileSizeBytes=2097152]
 * Max allowed file size in bytes.
 *
 * @returns {import('express').RequestHandler} Express middleware.
 */
function singleFileUpload(fieldName = 'file', maxFileSizeBytes = 2 * 1024 * 1024) {
  const upload = createMemoryUploader(maxFileSizeBytes);
  return upload.single(fieldName);
}

// Example usage:
// app.post('/upload', singleFileUpload('avatar', 2 * 1024 * 1024), (req, res) => {
//   res.json({ fileName: req.file?.originalname, size: req.file?.size });
// });

module.exports = { createMemoryUploader, singleFileUpload };
