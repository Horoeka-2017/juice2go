exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', function(table) {
        table.increments('id').primary()
        table.string('name')
        table.string('address')
        table.string('email')
<<<<<<< HEAD
        table.dateTime('created_at')
=======
        table.timestamps('created_at')
>>>>>>> develop
        table.boolean('delivery')
        table.string('status')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders')
}
