exports.up = function(knex, Promise) {
    return knex.schema.createTable('order_items', function(table) {
        table.increments('id')
        table.integer('order_id').references('orders.id')
        table.string('type')
        table.integer('quantity')
        table.string('size')
    })
}
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('order_items')
}
