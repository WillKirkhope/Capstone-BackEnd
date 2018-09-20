exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', games => {
    games.integer('gameId').references('gameId')
    games.integer('postId').references('posts.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games')
};
