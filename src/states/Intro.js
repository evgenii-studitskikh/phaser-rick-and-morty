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
      0,
      0,
      'portal'
    );
    this.portal.scale.setTo(5, 5);
    this.portal.anchor.setTo(0.5);

    this.add.tween(this.portal).to( 
      { rotation: 2 }, 
      10000, 
      Phaser.Easing.easeInOut,
      true,
      false
    );

    //text
    this.welcomeText = this.add.text(
      this.world.centerX,
      this.world.centerY, 
      "#username#, \n  I'm the insane chaotic thing \n I welcome you!", 
      { 
        fontFamily: 'Arial', 
        fontSize: 48, 
        fill: '#ffffff', 
        align: 'center'
      }
    );
    this.welcomeText.anchor.setTo(0.5);

    //button
    this.buttonAccept = this.add.button(
      this.world.centerX,
      this.world.centerY + 180,
      'accept',
      () => this.handleRightClick()
    );
    this.buttonAccept.anchor.setTo(0.5);
    this.buttonAccept.scale.setTo(0.2, 0.2);

    //button text
    this.buttonAcceptText = this.add.text(
      this.world.centerX,
      this.world.centerY + 180, 
      "I got you! Let's go!", 
      { 
        fontFamily: 'Arial', 
        fontSize: 28, 
        fill: '#FF8FFC',
        align: 'center'
      }
    );
    this.buttonAcceptText.anchor.setTo(0.5);

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

    this.add.tween(this.buttonAcceptText).to( 
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
      { x: 55, y: 55 }, 
      6000, 
      Phaser.Easing.easeInOut,
      true,
      false,
    );

    this.add.tween(this.portal).to( 
      { rotation: 12 }, 
      10000, 
      Phaser.Easing.easeInOut,
      true,
      false
    );

    setTimeout(() => {
      this.game.state.start('Cutscene');
    }, 6000);
  }
}
