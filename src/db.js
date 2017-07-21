module.exports = {
    getUser: getUser,
    getUsers: getUsers,
    getOrder: getOrder,
    getOrders: getOrders
}


const config = require('../knexfile').development

const knex = require('knex')
const conn = knex(config)

function getUsers(connection) {
    return conn('users').select()
}

function getUser(id, connection) {
    return conn('users').where('id', id)
}

function getOrder(id, connection) {
    return conn('orders').select('id', id)

}

function getOrders() {
    return conn('orders').select()
}