class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('ul.row').on('click', 'li', (e)=>{
      const pos = $(e.currentTarget).data("data-pos");
      let player = this.game.currentPlayer;
      // console.log(pos);
      this.game.playMove(pos);
      $(e.currentTarget).css("background-color", "white");
      $(e.currentTarget).off("mouseenter");
      $(e.currentTarget).off("mouseout");
      $(e.currentTarget).text(player);
      if(this.game.winner()){
        let winner = this.game.winner();
        const b = $('p').text(`The Winner is ${winner}`);
        
      }
    });
  }

  makeMove($square) {

  }

  setupBoard() {
    const board = this.game.board;
    let row;
    let square;
    for (var i = 0; i < board.grid.length; i++) {
      row = $("<ul>").addClass("row").addClass("group");
      for (var col = 0; col < board.grid[i].length; col++) {
        square = $("<li>").addClass("square").data("data-pos", [i, col]);
        square.on("mouseenter", (e) =>{
          const $sq = $(e.currentTarget);
          $sq.css("background-color", "red");
        });
        square.on("mouseout", (e) =>{
          const $sq = $(e.currentTarget);
          $sq.css("background-color", "blue");
        });
        row.append(square);
      }
      this.$el.append(row);
    }
    }
  }

module.exports = View;
