exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
    users.increments()
    users.string('GamerTag')
    users.string('Description')
    users.string('PlayStyle')
    users.string('FavoriteGames')
    users.string('Image')
    users.string('Video')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
