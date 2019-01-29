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

    this.game.load.image('enterenece-constructor-bg', 'assets/enterence_constructor_bg.svg');
    this.game.load.image('backdrop', 'assets/backdrop.png');
    this.game.load.image('planet-enterence', 'assets/planet_enterence.png');

    this.game.load.image('constructor-arrow-left', 'assets/constructor_arrow_left.svg');
    this.game.load.image('constructor-arrow-right', 'assets/constructor_arrow_right.svg');
    this.game.load.image('constructor-select-head', 'assets/constructor_select_head.svg');
    this.game.load.image('constructor-select-body', 'assets/constructor_select_body.svg');
    this.game.load.image('constructor-select-arms_left', 'assets/constructor_select_arms.svg');
    this.game.load.image('constructor-select-arms_right', 'assets/constructor_select_arms.svg');
    this.game.load.image('constructor-select-legs', 'assets/constructor_select_legs.svg');
    this.game.load.image('constructor-select-random', 'assets/constructor_select_random.svg');
    this.game.load.image('constructor-apply', 'assets/constructor_apply.svg');
    this.game.load.image('constructor-yellow-head', 'assets/constructor_yellow_head.svg');
    this.game.load.image('constructor-name-label', 'assets/constructor_name_label.svg');
    this.game.load.image('constructor-wish-label', 'assets/constructor_wish_label.svg');
    this.game.load.image('constructor-tube', 'assets/constructor_tube.svg');
    this.game.load.image('constructor-to-constructor', 'assets/constructor_to_constructor.svg');
    this.game.load.image('constructor-to-club', 'assets/constructor_to_club.svg');

    //constructor heads
    this.game.load.image('head1', 'assets/constructor/head_1.svg');
    this.game.load.image('head2', 'assets/constructor/head_2.svg');
    this.game.load.image('head3', 'assets/constructor/head_3.svg');
    this.game.load.image('head4', 'assets/constructor/head_4.svg');
    this.game.load.image('head5', 'assets/constructor/head_5.svg');
    this.game.load.image('head6', 'assets/constructor/head_6.svg');
    this.game.load.image('head7', 'assets/constructor/head_7.svg');
    this.game.load.image('head8', 'assets/constructor/head_8.svg');
    this.game.load.image('head9', 'assets/constructor/head_9.svg');
    this.game.load.image('head10', 'assets/constructor/head_10.svg');
    this.game.load.image('head11', 'assets/constructor/head_11.svg');
    this.game.load.image('head12', 'assets/constructor/head_12.svg');
    this.game.load.image('head13', 'assets/constructor/head_13.svg');

    //constructor body
    this.game.load.image('body1', 'assets/constructor/body_1.svg');
    this.game.load.image('body2', 'assets/constructor/body_2.svg');
    this.game.load.image('body3', 'assets/constructor/body_3.svg');
    this.game.load.image('body4', 'assets/constructor/body_4.svg');
    this.game.load.image('body5', 'assets/constructor/body_5.svg');
    this.game.load.image('body6', 'assets/constructor/body_6.svg');
    this.game.load.image('body7', 'assets/constructor/body_7.svg');
    this.game.load.image('body8', 'assets/constructor/body_8.svg');
    this.game.load.image('body9', 'assets/constructor/body_9.svg');
    this.game.load.image('body10', 'assets/constructor/body_10.svg');

    //constructor legs
    this.game.load.image('legs1', 'assets/constructor/legs_1.svg');
    this.game.load.image('legs2', 'assets/constructor/legs_2.svg');
    this.game.load.image('legs3', 'assets/constructor/legs_3.svg');
    this.game.load.image('legs4', 'assets/constructor/legs_4.svg');
    this.game.load.image('legs5', 'assets/constructor/legs_5.svg');
    this.game.load.image('legs6', 'assets/constructor/legs_6.svg');
    this.game.load.image('legs7', 'assets/constructor/legs_7.svg');
    this.game.load.image('legs8', 'assets/constructor/legs_8.svg');
    this.game.load.image('legs9', 'assets/constructor/legs_9.svg');
    this.game.load.image('legs10', 'assets/constructor/legs_10.svg');

    //constructor arms
    this.game.load.image('arms_left1', 'assets/constructor/arms_left_1.svg');
    this.game.load.image('arms_left2', 'assets/constructor/arms_left_2.svg');
    this.game.load.image('arms_left3', 'assets/constructor/arms_left_3.svg');
    this.game.load.image('arms_left4', 'assets/constructor/arms_left_4.svg');
    this.game.load.image('arms_left5', 'assets/constructor/arms_left_5.svg');
    this.game.load.image('arms_left6', 'assets/constructor/arms_left_6.svg');
    this.game.load.image('arms_left7', 'assets/constructor/arms_left_7.svg');
    this.game.load.image('arms_left8', 'assets/constructor/arms_left_8.svg');
    this.game.load.image('arms_left9', 'assets/constructor/arms_left_9.svg');
    this.game.load.image('arms_left10', 'assets/constructor/arms_left_10.svg');

    this.game.load.image('arms_right1', 'assets/constructor/arms_right_1.svg');
    this.game.load.image('arms_right2', 'assets/constructor/arms_right_2.svg');
    this.game.load.image('arms_right3', 'assets/constructor/arms_right_3.svg');
    this.game.load.image('arms_right4', 'assets/constructor/arms_right_4.svg');
    this.game.load.image('arms_right5', 'assets/constructor/arms_right_5.svg');
    this.game.load.image('arms_right6', 'assets/constructor/arms_right_6.svg');
    this.game.load.image('arms_right7', 'assets/constructor/arms_right_7.svg');
    this.game.load.image('arms_right8', 'assets/constructor/arms_right_8.svg');
    this.game.load.image('arms_right9', 'assets/constructor/arms_right_9.svg');
    this.game.load.image('arms_right10', 'assets/constructor/arms_right_10.svg');


    //audio
    this.load.audio('click', [
      'sounds/click.mp3'
		]);
		
		this.game.load.start();
  }
}
