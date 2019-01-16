export default class Intro extends Phaser.State {

  create() {
    //background
    this.space = this.add.tileSprite(
      0,
      0,
      this.game.width,
      this.game.height,
      'space'
    );

    //portal
    this.portal = this.add.tileSprite(
      this.world.centerX,
      this.world.centerY,
      850,
      800,
      'portal'
    );
    this.portal.scale.setTo(1);
    this.portal.anchor.setTo(0.5);

    this.add.tween(this.portal).to( 
      { rotation: 20 }, 
      100000, 
      Phaser.Easing.easeInOut,
      true,
    );

    //text
    this.welcomeText = this.add.tileSprite(
      this.world.centerX,
      this.world.centerY, 
      460,
      105,
      'portal-text'
    );
    this.welcomeText.scale.setTo(1.2);
    this.welcomeText.anchor.setTo(0.5);

    //button
    this.buttonAccept = this.add.button(
      this.world.centerX,
      this.world.centerY + 120,
      'portal-button',
      () => this.handleRightClick()
    );
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

    this.add.tween(this.portal.scale).to( 
      { x: 15, y: 15 }, 
      3000 + Math.random() * 1000,
      Phaser.Easing.easeInOut,
      true,
      false,
    );

    this.add.tween(this.portal).to( 
      { rotation: 50 }, 
      3000 + Math.random() * 100, 
      Phaser.Easing.Bounce.In,
      true,
      false
    );

    setTimeout(() => {
      this.game.state.start('Cutscene');
    }, 4000);
  }
}
