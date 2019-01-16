import Constructor from '../objects/constructor';

export default class Enterence extends Phaser.State {

  create() {
    this.space = this.game.add.tileSprite(
      0,
      0,
      this.game.width,
      this.game.height,
      'space'
    );

    this.constructor = new Constructor(this.game);
  }
}
