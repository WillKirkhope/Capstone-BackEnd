exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', posts => {
    posts.increments()
    posts.string('GamerTag')
    posts.string('Game')
    posts.string('Activity')
    posts.string('Description')
    posts.string('PlayersNeeded')
    posts.string('AgeGroup')
    posts.string('Mic')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
