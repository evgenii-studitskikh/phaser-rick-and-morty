'use strict';

export default class Select {

  constructor(game){
    this.arrow_right = game.add.button(950, 250, 'arrow');
    this.arrow_left = game.add.button(800, 300, 'arrow', () => this.handleLeftClick());

    this.selectValue = game.add.text(815, 235, 'bbb', { fontFamily: 'Arial', fontSize: 64, fill: '#ffffff' });

    this.arrow_right.scale.setTo(0.2, 0.2);
    this.arrow_left.scale.setTo(0.2, 0.2);
    this.arrow_left.rotation = 3.2;
  }

  handleLeftClick() {
    this.selectValue.text = 'aaaa';
  }
}