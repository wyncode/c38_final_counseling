const mongoose = require('mongoose'),
  moment = require('moment'),
  validator = require('validator'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');
const Journal = require('./Journal');

// Creating User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    avatar: {
      type: String
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('email is invalid');
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error("can't be password.");
        }
        if (value.length < 6) {
          throw new Error('password must be at least 6 characters long.');
        }
      }
    }
  },
  {
    timestamps: true
  }
);
// Create relation between User and Journal Entries.
userSchema.virtual('journal', {
  ref: Journal,
  localField: '_id',
  foreignField: 'owner'
});
// By naming this method toJSON we don't need to call it for it to run because of our express res.send methods calls it for us.
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  // delete userObject.tokens;
  return userObject;
};
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};
// find user by email and password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('email invalid or user does not exist');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('wrong password, try again');
  return user;
};
// This mongoose middleware will hash our user's passwords whenever a user is created or a user password is updated.
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});
// Delete user journal entries when a user is removed.
userSchema.pre('remove', async function (next) {
  const user = this;
  await Journal.deleteMany({
    owner: user._id
  });
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
