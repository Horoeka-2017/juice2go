module.exports = {
    getUser: getUser,
    getUsers: getUsers,
    addItemInfo: addItemInfo,
    addOrderInfo: addOrderInfo,
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

function addOrderInfo(info, connection) {
    return conn('orders')
        .insert(info)
}

function addItemInfo(info, connection) {
    return conn('order_items')
        .insert(info)
}

function getOrder(id, connection) {
    return conn('orders').where('orders.id', id)
        .join('order_items', 'order_items.order_id', '=', 'orders.id')

}

function getOrders() {
    return conn('orders').select()
        .join('order_items', 'order_items.order_id', '=', 'orders.id')
}