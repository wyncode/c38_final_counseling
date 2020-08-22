const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {},
  race: {
    type: String
  },
  genderidentity: {},
  sexualOrientation: {},
  children: {},
  avatar: {},
  therapist: {
    type: String,
    unique: true,

    trim: true
  },
  journal: {},
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid.');
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error("Password can't be password.");
      }
      if (value.length < 6) {
        throw new Error('Password must be at least 6 characters long.');
      }
    }
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
