const uuidv4 = require('uuid/v4')
const faker = require('faker')
const knex = require('knex')
let A = []
function createData() {
  Array(3).fill(1).forEach(x => {
    A.push(new Order((faker.name.firstName() + ' ' + faker.name.lastName()), (faker.address.city() + ' ' + faker.address.streetAddress()), faker.internet.email(), faker.random.boolean(), faker.random.arrayElement(['delivered', 'processing', 'ready'])))
    console.log('beep')
  })
}
function Order(name, address, email, delivery, status) {
  this.name = name
  this.address = address
  this.created_at = Date.now()
  this.email = email
  this.delivery = delivery
  this.status = status
}

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  createData()
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert(A)
    })
}
