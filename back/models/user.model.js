const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const userSchema = new Schema({
  method: {
    type: String,
    enum: ['local', 'google'],
    required: true
  },
  local: {
    userName:{
        type:String
    },
    email: {
      type: String,
      trim: true,
      lowercase: true
    },
    hashed_password:{
      type:String
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
  birthday: { type: Date  },
  name_full: {
    type: String,
    trim: true
  },
  phone: { type: String  },
  avatar: { type:String },
  created: {
    type: Date,
    default: Date.now
  },
  following: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  followers: [{type: mongoose.Schema.ObjectId, ref: 'User'}],

  favorite_stores: [{type: mongoose.Schema.ObjectId, ref: 'Store'}],
  favorite_dishes: [{type: mongoose.Schema.ObjectId, ref: 'Dish'}]
});

module.exports= mongoose.model('User', userSchema);