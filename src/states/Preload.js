export default class Preload extends Phaser.State {

	preload() {

    //preloading screen sprites
    this.preloadPortal = this.game.add.sprite(
      this.world.centerX,
      this.world.centerY,
      'preload-portal'
    );
    this.preloadPortal.anchor.setTo(0.5);

    this.preloadPortalGradient = this.game.add.sprite(
      this.world.centerX,
      this.world.centerY,
      'preload-portal-gradient'
    );
    this.preloadPortalGradient.anchor.setTo(0.5);

    this.LoadingText = this.add.text(
      this.world.centerX,
			this.world.centerY + 5,
      'Загрузка...', 
      { 
        font: 'Lasco', 
        fontSize: 16, 
        fill: '#FFFFFF',
        align: 'center'
      }
    );
		this.LoadingText.anchor.setTo(0.5);

    //preloading for all game resources
    this.game.load.image('space', 'assets/space.png');
    this.game.load.image('portal', 'assets/portal.svg');
    this.game.load.image('portal-text', 'assets/intro_text.svg');
    this.game.load.image('portal-button', 'assets/intro_button.svg');

    this.game.load.image('space-lemon', 'assets/space/lemon.svg');
    this.game.load.image('space-blue-ball', 'assets/space/blue_ball.svg');
    this.game.load.image('space-grey-ball', 'assets/space/grey_ball.svg');

    this.load.audio('enter', [
      'sounds/enter.mp3'
    ]);
    
    this.game.load.image('cutscene-char', 'assets/cutscene_char.svg');
    this.game.load.image('cutscene-dialog', 'assets/cutscene_dialog.svg');
    this.game.load.image('cutscene-arrow-next', 'assets/cutscene_button_next.svg');
    this.game.load.image('cutscene-arrow-prev', 'assets/cutscene_button_prev.svg');
    this.game.load.image('cutscene-planet', 'assets/cutscene_planet.svg');
    this.game.load.image('cutscene-accept-button', 'assets/cutscene_accept_button.svg');

    this.load.audio('13track',['music/13.Alien_Jazz_Rap.ogg', 'music/13.Alien_Jazz_Rap.mp3']);
  }

  create() {
		this.game.state.start('Intro');
	}
}