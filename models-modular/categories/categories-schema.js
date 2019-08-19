'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'snack']
  }
});

module.exports = mongoose.model('categories ', categories);