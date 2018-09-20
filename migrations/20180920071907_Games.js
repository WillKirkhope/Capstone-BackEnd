exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', games => {
    games.increments()
    games.int.references.posts('id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games')
};
