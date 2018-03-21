class View {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.setupTowers();
  }


  clickTower() {
    let clickcount = [];
    $('ul').on('click', (e) => {
      const tower = $(e.currentTarget);


    });
  }


  setupTowers() {
    const towers = this.game.towers;
    console.log(towers);
    let row;
    let tower;
    for (var i = 0; i < towers.length; i++ ) {
      row = $("<ul>").addClass("tower").addClass("group").data("tower_num", i);
      for (var j = towers[i].length-1; j >= 0; j-- ) {
        tower = $("<li>").addClass("disk").text(towers[i][j]);
        $(row).append(tower);
      }
      this.rootEl.append(row);
    }
  }

}

module.exports = View;
