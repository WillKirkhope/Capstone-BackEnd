
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          Gamertag: "Pictish Brute",
          Game: "Destiny 2",
          Activity: "Competitive Crucible",
          Description: "Looking for a few sweaty players to help me slap everyone about",
          PlayersNeeded: "2",
          AgeGroup: "Don’t care",
          Mic: "Yes"
        },
        {
          Gamertag: "Im All Nuts",
          Game: "Destiny 2",
          Activity: "Nightfall",
          Description: "Going for a high score run on the new nightfall, lets make it happen!",
          PlayersNeeded: "1",
          AgeGroup: "25+",
          Mic: "Don’t Care"
        },
        {
          Gamertag: "Psyker69",
          Game: "Destiny 2",
          Activity: "Quest Help",
          Description: "Need help finishing the final step for exotic quest, running Escalation Protocol",
          PlayersNeeded: "4",
          AgeGroup: "25+",
          Mic: "No"
        },
        {
          GamerTag: "Pictish Brute",
          Game: "Titanfall 2",
          Activity: "Titan Brawl",
          Description: "Looking to squad up and get a win streak going",
          PlayersNeeded: "3",
          AgeGroup: "25 +",
          Mic: "No"
        },
        {
          GamerTag: "Im All Nuts",
          Game: "TitanFall 2",
          Activity: "Attrition",
          Description: "Just playing some casual Attrition if you want to jump in!",
          PlayersNeeded: "2",
          AgeGroup: "Don’t care",
          Mic: "Yes"
        }
      ]);
    });
};
