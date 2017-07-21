module.exports = {
    getUser: getUser,
    getUsers: getUsers
}

function getUsers(connection) {
    return connection('users').select()
}

function getUser(id, connection) {
    return connection('users').where('id', id)
}

function addOrderInfo(info, connection) {
    return connection('orders')
        .insert(info)
}

function addItemInfo(info, connection) {
    return connection('order_items')
        .insert(info)
}