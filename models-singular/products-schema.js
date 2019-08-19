'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['electronics', 'games', 'appliances', 'art']
  }
});
// Do we need to run any lifecycle hooks/middleware?


module.exports = mongoose.model('products ', products);