// Mongoose Basics
// Theory: Mongoose adds schema + model structure on top of MongoDB.

const mongoose = require('mongoose');

/**
 * Connects Node app to MongoDB.
 *
 * @param {string} uri
 * MongoDB connection string.
 * Example: `mongodb://127.0.0.1:27017/mydb`
 * or `mongodb+srv://<user>:<pass>@cluster.mongodb.net/mydb`
 *
 * @returns {Promise<typeof mongoose>} Promise resolved when DB is connected.
 */
function connectDB(uri) {
  return mongoose.connect(uri);
}

/**
 * Creates (or reuses) a `User` model.
 *
 * `mongoose.models.User` check avoids model overwrite errors
 * when this file is loaded more than once.
 *
 * @returns {import('mongoose').Model<any>} User model.
 */
function createUserModel() {
  const userSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
    },
    { timestamps: true }
  );

  return mongoose.models.User || mongoose.model('User', userSchema);
}

/**
 * Inserts one user document.
 *
 * @param {import('mongoose').Model<any>} User
 * Model created by `createUserModel()`.
 *
 * @param {{name: string, email: string}} payload
 * Object that matches schema fields.
 *
 * @returns {Promise<any>} Saved user document.
 */
async function createUser(User, payload) {
  const user = await User.create(payload);
  return user;
}

/**
 * Finds one user document by email.
 *
 * @param {import('mongoose').Model<any>} User
 * User model.
 *
 * @param {string} email
 * Email value to search in collection.
 *
 * @returns {Promise<any|null>} User doc if found, otherwise `null`.
 */
async function findUserByEmail(User, email) {
  return User.findOne({ email });
}

// Example usage:
// await connectDB('mongodb://127.0.0.1:27017/mydb');
// const User = createUserModel();
// await createUser(User, { name: 'Aman', email: 'aman@example.com' });
// const user = await findUserByEmail(User, 'aman@example.com');

module.exports = { connectDB, createUserModel, createUser, findUserByEmail };
