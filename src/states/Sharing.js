export default class Sharing extends Phaser.State {

  create() {
    //background
    this.space = this.add.sprite(
      0,
      0,
      'space'
    );

    this.bgGroundSharing = this.add.tileSprite(
      0,
      0,
      this.game.width,
      this.game.height,
      'bg-sharing-ground'
    );

    this.office = this.add.sprite(0,0, 'office-house')
  };
}
