const uuidv4 = require('uuid/v4')
const faker = require('faker')
const knex = require('knex')
let A = []
function createData () {
  Array(23).fill(1).forEach(x => {
    A.push(new Order(uuidv4 , (faker.name.firstName() + ' ' + faker.name.lastName()), (faker.address.city() + ' ' + faker.address.streetAddress()), faker.internet.email, faker.random.boolean(), faker.random.arrayElement(['delivered','processing','ready'])
    console.log('beep')
  })
}
function Order (id, name, address, gender, email, delivery) {
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
