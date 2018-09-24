
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
          Image: "https://i.pinimg.com/originals/9f/52/e7/9f52e7f3eab25066130ca6532cc94d6c.jpg",
          Video: "https://www.youtube.com/watch?v=9ZyQK6kUdWQ"
        },
        {
          GamerTag: "Im All Nuts",
          Description: "Casual player just playing with my friends!",
          PlayStyle: "Casual, Fun, Relaxed",
          FavoriteGames: "Destiny 2, Battlefield 1",
          Image: "http://i.imgur.com/hxk46EI.jpg",
           Video: "https://www.youtube.com/watch?v=9ZyQK6kUdWQ"
        },
        {
          GamerTag: "Psyker69",
          Description: "I Suck at video games, looking for friends to help me git gud",
          PlayStyle: "Bad, Pleb, Noob, Clueless",
          FavoriteGames: "Destiny 2, Rocket league",
          Image: "https://i.pinimg.com/originals/78/79/68/787968b633750342d72544ad12ca083a.jpg",
          Video: "https://www.youtube.com/watch?v=9ZyQK6kUdWQ"
        }
      ]);
    });
};
