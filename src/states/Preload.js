export default class Preload extends Phaser.State {

	preload() {
    this.game.load.image('mountains-back', 'assets/mountains-back.png');
    this.game.load.image('mountains-mid1', 'assets/mountains-mid1.png');
    this.game.load.image('mountains-mid2', 'assets/mountains-mid2.png');
    this.game.load.image('planet', 'assets/planet.png');
    this.game.load.image('rick', 'assets/rick.png');
    this.game.load.image('button', 'assets/button.png');
    this.game.load.image('club', 'assets/club.png');
    this.game.load.image('frame', 'assets/frame.png');
    this.game.load.image('arrow', 'assets/arrow.png');
    this.game.load.spritesheet('heads', 'assets/heads.png', 350, 315);

    this.load.audio('soundtrack', [
      'music/techno.mp3'
    ]);

    this.load.audio('click', [
      'sounds/click.mp3'
    ]);
  }

  create() {
		this.game.state.start('Enterence');
	}
}