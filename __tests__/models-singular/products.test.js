const Products = require('../../models-singular/products');
let products = new Products();

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    let product = {name: 'phone', type: 'electronics'}
    return products.create(product)
      .then(newProduct => {
        console.log(product)

        Object.keys(product).forEach(key => {
          expect(newProduct[key]).toEqual(product[key])
        })
      });
  });

  it('can get() a category', () => {
    let product = {name: 'phone', type: 'electronics'}
    return products.create(product)
      .then(newProduct => {
        return products.get(newProduct._id)
          .then(retrievedProduct => {
            Object.keys(product).forEach(key => {
              expect(retrievedProduct[key]).toEqual(product[key])
            })
          })
      })

  });

  it('can get() all categories', () => {
  });

  it('can update() a category', () => {
    let product = {name: 'phone', type: 'electronics'}
    return products.create(product)
      .then(newProduct => {
        product.name = 'tablet';
        return products.update(newProduct._id, product)
          .then(updatedProduct => {
            expect(updatedProduct.name).toEqual(product.name);
          })
      })

  });

  it('can delete() a category', () => {
    let product = {name: 'phone', type: 'electronics'}
    return products.create(product)
      .then(newProduct => {
        return products.delete(newProduct._id)
          .then(updatedProduct => {
            expect(updatedProduct).toEqual(undefined);
          })
      })
  });

});