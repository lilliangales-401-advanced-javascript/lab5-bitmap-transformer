const Categories = require('../../models-singular/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    let food = {name: 'Tacos', description: 'lunch'}
    return categories.create(food)
      .then(newFood => {
        Object.keys(food).forEach(key => {
          expect(newFood[key]).toEqual(food[key])
        })
      });
  });

  it('can get() a category', () => {
    let food = {name: 'Oatmeal', description: 'breakfast'}
    return categories.create(food)
      .then(newFood => {
        return categories.get(newFood._id)
          .then(retrievedFood => {
            Object.keys(food).forEach(key => {
              expect(retrievedFood[key]).toEqual(food[key])
            })
          })
      })

  });

  it('can get() all categories', () => {
  });

  it('can update() a category', () => {
    let food = {name: 'Sushi', description: 'lunch'};
    return categories.create(food)
      .then(newFood => {
        food.name = 'Sushiburrito';
        return categories.update(newFood._id, food)
          .then(updatedFood => {
            expect(updatedFood.name).toEqual(food.name);
          })
      })

  });

  it('can delete() a category', () => {
    let food = {name: 'Pizza', description: 'lunch'};
    return categories.create(food)
      .then(newFood => {
        return categories.delete(newFood._id, food)
          .then(updatedFood => {
            expect(updatedFood).toEqual(undefined);
          })
      })
  });

});