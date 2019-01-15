export default class Preload extends Phaser.State {

	preload() {
    this.game.load.image('planet', 'assets/planet.png');
    this.game.load.image('button', 'assets/button.png');
    this.game.load.image('club', 'assets/club.png');
    this.game.load.image('space', 'assets/space.png');
    this.game.load.image('portal', 'assets/portal.svg');
    this.game.load.image('portal-text', 'assets/intro_text.svg');
    this.game.load.image('portal-button', 'assets/intro_button.svg');
    this.game.load.image('cutscene-char3', 'assets/cutscene_char3.svg');
    this.game.load.image('cutscene-dialog', 'assets/cutscene_dialog.svg');
    this.game.load.image('cutscene-arrow-next', 'assets/cutscene_button_next.svg');
    this.game.load.image('frame', 'assets/frame.png');
    this.game.load.image('arrow', 'assets/arrow.png');
    this.game.load.image('dialog', 'assets/dialog.png');
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