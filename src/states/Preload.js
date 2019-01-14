export default class Preload extends Phaser.State {

	preload() {
    this.game.load.image('planet', 'assets/planet.png');
    this.game.load.image('rick', 'assets/rick.png');
    this.game.load.image('button', 'assets/button.png');
    this.game.load.image('club', 'assets/club.png');
    this.game.load.image('space', 'assets/space.jpg');
    this.game.load.image('portal', 'assets/portal.png');
    this.game.load.image('frame', 'assets/frame.png');
    this.game.load.image('arrow', 'assets/arrow.png');
    this.game.load.image('accept', 'assets/accept.png');
    this.game.load.spritesheet('heads', 'assets/heads.png', 350, 315);

    this.load.audio('soundtrack', [
      'music/techno.mp3'
    ]);

    this.load.audio('click', [
      'sounds/click.mp3'
    ]);

    this.load.audio('enter', [
      'sounds/enter.mp3'
    ]);
  }

  create() {
		this.game.state.start('Intro');
	}
}