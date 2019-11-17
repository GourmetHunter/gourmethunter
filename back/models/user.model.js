const mongoose = require('mongoose');
var crypto = require('crypto');
const Schema = mongoose.Schema;

// Create a schema
const userSchema = new Schema({
  method: {
    type: String,
    enum: ['local', 'google'],
    required: true
  },
  local: {
    userName: {
      type: String
    },
    email: {
      type: String,
      trim: true,
      lowercase: true
    },
    hashed_password: {
      type: String
    },
  },
  google: {
    id: {
      type: String
    },
    email: {
      type: String,
      trim: true,
      lowercase: true
    }
  },
  gender: { type: String },
  address: { type: String },
  birthday: { type: Date },
  name_full: {
    type: String,
    trim: true
  },
  phone: { type: String },
  avatar: { type: String },
  created: {
    type: Date,
    default: Date.now
  },
  salt: { type: String },
  following: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  followers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],

  favorite_stores: [{ type: mongoose.Schema.ObjectId, ref: 'Store' }],
  favorite_dishes: [{ type: mongoose.Schema.ObjectId, ref: 'Dish' }]

});

userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password
    this.salt = this.makeSalt()
    this.local.hashed_password = this.encryptPassword(password)
  })
  .get(function () {
    return this._password
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.local.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return ''
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex')
    } catch (err) {
      return ''
    }
  },
  makeSalt: function () {
    return Math.round((new Date().valueOf() * Math.random())) + ''
  }
};

module.exports = mongoose.model('User', userSchema);