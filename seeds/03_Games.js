
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {gameId: 1, postId: 1},
        {gameId: 1, postId: 2},
        {gameId: 1, postId: 3},
        {gameId: 2, postId: 4},
        {gameId: 2, postId: 5}
      ]);
    });
};
