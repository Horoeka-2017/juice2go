module.exports = {
  getUser: getUser,
  getUsers: getUsers
}

const config = require('./knexfile').development

const knex = require('knex')
const conn = knex(config)

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}


/**
* This function gets all the order from the database, it should have no parameters
*/

function getOrders (){
  return
}
