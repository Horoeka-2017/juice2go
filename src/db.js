module.exports = {
<<<<<<< HEAD
  getUser: getUser,
  getUsers: getUsers
}

=======
    getUser: getUser,
    getUsers: getUsers,
    getOrder: getOrder
}


>>>>>>> master
const config = require('./knexfile').development

const knex = require('knex')
const conn = knex(config)

<<<<<<< HEAD
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
=======
function getUsers(connection) {
    return conn('users').select()
}

function getUser(id, connection) {
    return conn('users').where('id', id)
}

function getOrder(id, connection) {
<<<<<<< HEAD
    return conn('orders').where('id', id)
=======
    return connection('orders').where('id', id)
>>>>>>> seeds
>>>>>>> master
}
