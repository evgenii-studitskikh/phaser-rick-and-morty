export default class Preload extends Phaser.State {

	preload() {
    this.game.load.image('mountains-back', 'assets/mountains-back.png');
    this.game.load.image('mountains-mid1', 'assets/mountains-mid1.png');
    this.game.load.image('mountains-mid2', 'assets/mountains-mid2.png');
  }

  create() {
		this.game.state.start("Main");
	}
}