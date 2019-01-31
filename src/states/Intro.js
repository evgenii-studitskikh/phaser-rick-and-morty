export default class Intro extends Phaser.State {

  create() {

    this.game.scale.setGameSize(
      window.innerWidth, 
      window.innerHeight
    );
    
    //background
    this.space = this.add.sprite(
      0,
      0,
      'space'
    );

    //portal
    this.portal = this.add.sprite(
      this.world.centerX,
      this.world.centerY,
      'portal'
    );
    this.portal.scale.setTo(0.5);
    this.portal.anchor.setTo(0.5);

    this.add.tween(this.portal).to( 
      { rotation: 20 }, 
      100000, 
      Phaser.Easing.easeInOut,
      true,
    );

    //text
    this.welcomeText = this.add.sprite(
      this.world.centerX,
      this.world.centerY - 30,
      'portal-text'
    );
    this.welcomeText.scale.setTo(0.7);
    this.welcomeText.anchor.setTo(0.5);

    //button
    this.buttonAccept = this.add.button(
      this.world.centerX,
      this.world.centerY + 50,
      'portal-button',
      () => this.handleRightClick()
    );
    this.buttonAccept.scale.setTo(0.7);
    this.buttonAccept.anchor.setTo(0.5);

    //sound of enter
    this.soundEnter = this.sound.add('enter');
  }
  
  handleRightClick() {

    this.soundEnter.play();

    this.add.tween(this.buttonAccept).to( 
      { alpha: 0 }, 
      1000, 
      Phaser.Easing.easeInOut,
      true,
      false
    );

    this.add.tween(this.welcomeText).to( 
      { alpha: 0 }, 
      1000, 
      Phaser.Easing.easeInOut,
      true,
      500
    );

    this.add.tween(this.welcomeText.scale).to( 
      { x: 0, y: 0 }, 
      2000, 
      Phaser.Easing.easeInOut,
      true
    );

    const tweenPortalScale = this.add.tween(this.portal.scale).to( 
      { x: 5, y: 5 }, 
      4000,
      Phaser.Easing.easeInOut,
      true,
    );

    this.add.tween(this.portal).to( 
      { rotation: 50 }, 
      4000 + Math.random() * 100, 
      Phaser.Easing.Bounce.In,
      true,
      false
    );

    tweenPortalScale.onComplete.add(
      () => this.game.state.start('Cutscene'), 
      this
    );

		this.game.load.start();
  }
}
