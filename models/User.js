'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profileImage: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('users', UserSchema);