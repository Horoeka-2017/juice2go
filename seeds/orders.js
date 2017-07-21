exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('orders').del()
        .then(function() {
            // Inserts seed entries
            return knex('orders').insert([
                { id: 1, Name: 'Goliath Anderson', address: '21 Monggomer st', email: 'dark&stormy@longisland.com', delivery: false, status: '' },
                { id: 2, Name: 'Peter GRiffin', address: '72 Grogg Lane', email: 'Groggy@bigd.com', delivery: false, status: '' },
                { id: 3, Name: 'Nickel Sahma', address: '69 Virgina Beach', email: 'virgin@beach.com', delivery: false, status: '' }
            ]);
        });
};