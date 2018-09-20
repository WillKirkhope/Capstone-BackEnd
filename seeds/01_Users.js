
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          GamerTag: "Pictish Brute",
          Description: "Enjoy playing fast paced and competitive, doing raids and helping friends!",
          PlayStyle: "Aggressive, Competitive, Completionist",
          FavoriteGames: "Destiny 2, TitanFall 2",
          Image: "",
          Video: ""
        },
        {
          GamerTag: "Im All Nuts",
          Description: "Casual player just playing with my friends!",
          PlayStlye: "Casual, Fun, Relaxed",
          FavoriteGames: "Destiny 2, Battlefield 1",
          Image: "",
           Video: ""
        },
        {
          GamerTag: "Psyker69",
          Description: "I Suck at video games, looking for friends to help me git gud",
          PlayStlye: "Bad, Pleb, Noob, Clueless",
          FavoriteGames: "Destiny 2, Rocket league",
          Image: "",
          Video: ""
        }
      ]);
    });
};
