
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
          Video: "https://gameclipscontent-d3021.xboxlive.com/xuid-2535444063957577-private/b1fb160c-422b-4e56-a1ca-0aad513b6b41.MP4?sv=2015-12-11&sr=b&si=DefaultAccess&sig=zd21fqVhUUGLbjNZRYBQWEGanNba%2BNMMkYyozqzSEnM%3D&__gda__=1537221759_2d77d55c2c87acb4ff0b597b24c604ff"
        },
        {
          GamerTag: "Im All Nuts",
          Description: "Casual player just playing with my friends!",
          PlayStyle: "Casual, Fun, Relaxed",
          FavoriteGames: "Destiny 2, Battlefield 1",
          Image: "http://i.imgur.com/hxk46EI.jpg",
           Video: "https://gameclipscontent-d3024.xboxlive.com/xuid-2533274964295688-private/70a206f7-cb0e-45b8-a9f6-633bd754ecdc.MP4?sv=2015-12-11&sr=b&si=DefaultAccess&sig=GWu%2FT3O5gKhF6lUCMc5gMQCWnNWAQlJj%2F0S2Gk%2Brjz0%3D&__gda__=1537462524_c627e0d8b7193cbfc398ffcc2d39d2b6"
        },
        {
          GamerTag: "Psyker69",
          Description: "I Suck at video games, looking for friends to help me git gud",
          PlayStyle: "Bad, Pleb, Noob, Clueless",
          FavoriteGames: "Destiny 2, Rocket league",
          Image: "https://i.pinimg.com/originals/78/79/68/787968b633750342d72544ad12ca083a.jpg",
          Video: "https://gameclipscontent-d2010.xboxlive.com/xuid-2535444063957577-private/06b0f809-c536-4459-b396-74cd076fd2a5.MP4?sv=2015-12-11&sr=b&si=DefaultAccess&sig=us%2Fm6c%2F619VCaUGepDk4hgFq5BDiwWER7o7XR7qHM%2Fc%3D&__gda__=1537462668_f3fbaf9578a56db40a70e3c5de13ab9e"
        }
      ]);
    });
};
