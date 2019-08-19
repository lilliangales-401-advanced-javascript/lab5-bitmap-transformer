'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?

const mongooseModelProducts = require('./products-schema');

class Products {

  constructor() {
  }

  get(_id) {
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
    if(_id){
      return mongooseModelProducts.findOne({_id})
    } else {
      return mongooseModelProducts.find({})
        .then(results => {
          return `{ count: ${results.length}, results: [${results}]`
        });
    }
    return Promise.reject(new Error('INVALID ID'));
  }

  create(record) {
    const newRecord = new mongooseModelProducts(record);
    return newRecord.save();
  }

  update(_id, record) {
    return mongooseModelProducts.findByIdAndUpdate(_id, record, {new: true});
  }

  delete(_id) {
    return mongooseModelProducts.findByIdAndDelete(_id);
  }

}



module.exports = Products;