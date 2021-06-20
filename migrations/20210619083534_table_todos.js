
exports.up = function(knex) {
  return knex.schema.createTable('todos', table => {
      table.uuid('id').primary()
      table.string('text')
      table.boolean('completed')
      table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos')
};
