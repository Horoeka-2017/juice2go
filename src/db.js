module.exports = {
    getUser: getUser,
    getUsers: getUsers,
    getOrder: getOrder,
    addItemInfo: addItemInfo,
    addOrderInfo: addOrderInfo
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

function addOrderInfo(info, connection) {
    return conn('orders')
        .insert(info)
}

function addItemInfo(info, connection) {
    return conn('order_items')
        .insert(info)
}

function getOrder(id, connection) {
    return conn('orders').where('id', id)

}

function getOrders() {
    return conn('orders').select()
}