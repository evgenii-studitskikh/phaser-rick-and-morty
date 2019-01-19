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

    this.planet = this.game.add.sprite(
      0,
      this.game.height - 500,
      'planet-enterence'
    );
    this.planet.anchor.setTo(0, 0.5);

    this.constructor = new Constructor(this.game);
  }
}
