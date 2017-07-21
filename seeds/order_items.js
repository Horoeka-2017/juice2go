exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('order_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('order_items').insert([
        { id: 1, type: 'Dark and Stormy', quantity: 2, size: 'small', order_id: 1 },
        { id: 2, type: 'Virgin on the Beach', quantity: 1, size: 'small', order_id: 1 },
        { id: 3, type: 'Grogg', quantity: 6, size: 'medium', order_id: 1 },
        { id: 4, type: 'Ginger Whipp', quantity: 2, size: 'small', order_id: 2 },
        { id: 5, type: 'Dark and Stormy', quantity: 5, size: 'large', order_id: 3 },
        { id: 6, type: 'Virgin on the Beach', quantity: 1, size: 'large', order_id: 3 },
      ]);
    });
};



