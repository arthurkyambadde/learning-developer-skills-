'use strict';

//BETTING APP

//1) create a player array for each team

const game = {
  team1: 'Bayern Munich',
  team2: 'Brussia Dortmond',

  players: [
    [
      'neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],

    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sanch',
      'Gotze',
    ],
  ],
  score: '4.0',

  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],

  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allplayers = [...players1, ...players2];
console.log(allplayers);

const players1Final = [...players1, 'Thiago', 'coutinho', 'perisic'];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// console.log(game.scored);
printGoals(...game.scored);

team1 < team2 && console.log(`team1 is more likely to win`);
team1 > team2 && console.log(`team1 is more likely to win`);

//FOR LOOP

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//FOR OF LOOP

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}

// console.log([...menu.entries()]);
