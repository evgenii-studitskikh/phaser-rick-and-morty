import Constructor from '../objects/constructor';
import Meteor from '../objects/space/meteor';

export default class Enterence extends Phaser.State {

  constructor() {
    super();

    this.inputStyles = {
      font: '18px Lasco',
      fill: '#212121',
      width: 305,
      height: 20,
      padding: 10,
      borderColor: '#FFFFFF',
      backgroundColor: '#EEEEEE',
      borderRadius: 6,
      fillAlpha: '#212121'
    }

    this.char = {
      head: 1,
      body: 1,
      legs: 1,
      arms_left: 1,
      arms_right: 1
    }
  }

  create() {
    this.game.scale.setGameSize(
      window.innerWidth * 1.2, 
      window.innerHeight * 1.2
    );

    this.space = this.game.add.tileSprite(
      0,
      0,
      this.game.width,
      this.game.height,
      'space'
    );

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.add.plugin(PhaserInput.Plugin);

    this.lemon = new Meteor(this.game, {
      x: 900,
      y: 300,
      sprite: 'space-lemon',
      angularVelocity: -200,
      sound: '4_lemon_click'
    });

    this.blueBall = new Meteor(this.game, {
      x: 1200,
      y: 100,
      sprite: 'space-blue-ball',
      angularVelocity: -200,
      velocity: {
        x: 300,
        y: 300
      },
      sound: '5_ball_click'
    });

    this.greyBall = new Meteor(this.game, {
      x: 200,
      y: 600,
      sprite: 'space-grey-ball',
      angularVelocity: -100,
      velocity: {
        x: 400,
        y: 400
      },
      sound: '5_ball_click'
    });

    this.planet = this.game.add.sprite(
      0,
      this.game.height,
      'planet-enterence'
    );
    this.planet.anchor.setTo(0, 1);
    this.planet.width = this.game.width;
    this.planet.height = this.game.height;

    this.yellowHead = this.game.add.sprite(
      650,
      this.game.height - 600,
      'constructor-yellow-head'
    );
    this.yellowHead.anchor.setTo(0.5);
    this.yellowHead.inputEnabled = true;
    this.yellowHead.input.pixelPerfectClick = true;
    this.yellowHead.input.useHandCursor = true;
    this.yellowHeadSound = this.add.audio('7_head')
    this.yellowHead.events.onInputDown.add(()=>{this.yellowHeadSound.play()}, this);

    this.constructor = new Constructor({
      game: this.game,
      onSelect: (value, part) => {
        this.char[part] = value
      }
    });

    this.apply = this.game.add.button(
      60, 
      this.game.height - 60,
      'constructor-apply',
      () => this.onCreateButtonClick()
    );
    this.apply.width = 325;
    this.apply.height = 40;
    this.apply.anchor.setTo(0, 1);
    this.applySound = this.add.audio('2_ready_party');

    this.labelName = this.game.add.sprite(
      60, 
      this.game.height - 785,
      'constructor-name-label'
    );
    this.labelName.anchor.setTo(0, 1);

    this.labelWish = this.game.add.sprite(
      60, 
      this.game.height - 165,
      'constructor-wish-label'
    );
    this.labelWish.anchor.setTo(0, 1);

    this.inputWish = this.game.add.inputField(
      60, 
      this.game.height - 155, 
      this.inputStyles
    );

    this.inputName = this.game.add.inputField(
      60, 
      this.game.height - 775, 
      this.inputStyles
    );

    this.musicEnterence = this.sound.add('1_bg_constructor');
    this.sound.setDecodedCallback([ this.musicEnterence ], this.start, this);
  }

  start() {
    this.musicEnterence.play();
    this.musicEnterence.loopFull();
  }

  onCreateButtonClick() {

    this.applySound.play();

    this.constructor.hide();
    this.apply.visible = false;
    this.labelName.visible = false;
    this.labelWish.visible = false;
    this.inputWish.x = -1000;
    this.inputName.x = -1000;

    this.tube = this.game.add.sprite(
      1150, 
      this.game.height - 55,
      'constructor-tube'
    );
    this.tube.anchor.setTo(0, 1);

    this.goToClub = this.game.add.button(
      1170, 
      this.game.height - 320,
      'constructor-to-club',
      () => this.onApplyButtonClick()
    );
    this.goToClub.anchor.setTo(0.5);
    this.goToClubSound = this.add.audio('5_btn_green_arrow');

    this.goToConstructor = this.game.add.button(
      1150, 
      this.game.height - 220,
      'constructor-to-constructor',
      () => this.onToConstructorClick()
    );
    this.goToConstructor.anchor.setTo(0.5);
    this.goToConstructorSound = this.add.audio('6_btn_red_arrow');
  }

  onApplyButtonClick() {
    this.musicEnterence.pause();
    this.goToClubSound.play();
    const { head, body, legs, arms_left, arms_right } = this.char;

    const request = new XMLHttpRequest();
    const params = `body=head:${head};body:${body};arm_left:${arms_left};arm_right:${arms_right};legs:${legs};x:${100};y:${100};name:${this.inputName.value || 'Аноним'};message:${this.inputWish.value || 'С днем рождения, Пиком!'}`;
    request.open('GET', 'https://picom.ru/rm-api/?action=add&'+params, false);
    request.send();

    if (request.status != 200) {

      console.log('error')
    } else {

      this.game.state.start('Party');
    }
  }

  onToConstructorClick() {
    this.goToConstructorSound.play();
    this.constructor.show();
    this.apply.visible = true;
    this.labelName.visible = true;
    this.labelWish.visible = true;
    this.inputName.x = 60;
    this.inputWish.x = 60;

    this.tube.visible = false;
    this.goToClub.visible = false;
    this.goToConstructor.visible = false;
  }

  update() {
    this.space.tilePosition.x -= 0.7;

    this.lemon.screenWrap();
    this.blueBall.screenWrap();
    this.greyBall.screenWrap();
  }
}
