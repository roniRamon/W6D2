const View = require("./ttt-view");// require appropriate file
const Game = require("../solution/game.js");// require appropriate file

$( () => {
  // Your code here
  const game =  new Game();
  const $grid = $('.ttt');
  new View(game, $grid);
});
