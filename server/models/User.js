const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username required. Please enter a username'],
    trim: true,
    unique: true
    },
  password: {
    type: String,
    required: [true, 'Password required. Please enter a password'],
    minLength: [6, 'Minimum password length is 6 characters']
  },
  email: {
    type: String,
    required: [true, 'Email required. Please enter a valid email'],
    trim: true,
    unique: true,
    uniqueCaseInsensitive: true
  }
});

module.exports = User = mongoose.model('user', UserSchema.plugin(uniqueValidator));