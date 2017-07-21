<<<<<<< HEAD
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('order_items').del()
        .then(function() {
            // Inserts seed entries
            return knex('order_items').insert([
                { id: 1, type: 'Dark and Stormy', quantity: 2, size: 'small', order_id: 1 },
                { id: 2, type: 'Virgin on the Beach', quantity: 1, size: 'small', order_id: 1 },
                { id: 3, type: 'Grogg', quantity: 6, size: 'medium', order_id: 1 },
                { id: 4, type: 'Ginger Whipp', quantity: 2, size: 'small', order_id: 2 },
                { id: 5, type: 'Dark and Stormy', quantity: 5, size: 'large', order_id: 3 },
                { id: 6, type: 'Virgin on the Beach', quantity: 1, size: 'large', order_id: 3 },
            ]);
        });
};
=======
const uuidv4 = require('uuid/v4')
const faker = require('faker')
const knex = require('knex')
let A = []
function createData() {
  Array(23).fill(1).forEach(x => {
    A.push(new Order(uuidv4, (faker.name.firstName() + ' ' + faker.name.lastName()), (faker.address.city() + ' ' + faker.address.streetAddress()), faker.internet.email, faker.random.boolean(), faker.random.arrayElement(['delivered', 'processing', 'ready'])
    console.log('beep')
  })
}
function Order(id, name, address, gender, email, delivery) {
  this.name = name
  this.address = address
  this.gender = gender
  this.email = email
  this.delivery = delivery
}

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert(A)
    })
}
>>>>>>> task3-final
