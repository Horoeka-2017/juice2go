exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', function(table) {
        table.increments('id').primary()
        table.string('name')
        table.string('address')
        table.string('email')
        table.timestamps('created_at')
        table.boolean('delivery')
        table.string('status')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders')
}