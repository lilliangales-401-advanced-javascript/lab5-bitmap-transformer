'use strict';
const mongoose = require('mongoose');

const Categories = require('./models-singular/categories');

// Require your model
// Mongoose Server URI

const MONGOOSE_URI = 'mongodb://localhost/401-lab-05';
// Connect
mongoose.connect(MONGOOSE_URI, {useNewUrlParser: true});

const categories = new Categories();

const newCategories = categories.create({
  name: 'stuff',
  description: 'breakfast',
})
  .then(newCategories => {
    console.log(newCategories);
    return categories.get(newCategories._id);
  })
  .then(returnedCategories => console.log(returnedCategories))
  .catch(error => console.log(error));
// Do some work
// Disconnect
mongoose.disconnect();