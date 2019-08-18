'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?

const mongooseModelCategories = require('./categories-schema');


class Categories {

  constructor() {
  }

  get(_id) {
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
    if(_id){
      return mongooseModelCategories.findOne({_id})
    } else {
      return mongooseModelCategories.find({})
        .then(results => {
          return `{ count: ${results.length}, results: [${results}]`
        });
    }
    return Promise.reject(new Error('INVALID ID'));
  }

  create(record) {
    const newRecord = new mongooseModelCategories(record);
    return newRecord.save();
  }

  update(_id, record) {
    return mongooseModelCategories.findByIdAndUpdate(_id, record, {new: true});
  }

  delete(_id) {
   return mongooseModelCategories.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
