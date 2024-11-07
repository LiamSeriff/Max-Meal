const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true }, // In production, hash the password
});

const User = mongoose.model("User", userSchema);

module.exports = User;
