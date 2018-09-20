
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {GameId: 1, postId: 1},
        {GameId: 1, postId: 2},
        {GameId: 1, postId: 3},
        {GameId: 2, postId: 4},
        {GameId: 2, postId: 5}
      ]);
    });
};
