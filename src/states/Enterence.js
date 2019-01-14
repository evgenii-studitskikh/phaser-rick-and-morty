import Constructor from '../objects/constructor';

export default class Enterence extends Phaser.State {

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.clubBack = this.game.add.tileSprite(
      0,
      0,
      this.game.width,
      this.game.height,
      'club'
    );

    this.constructor = new Constructor(this.game);
  }
}
