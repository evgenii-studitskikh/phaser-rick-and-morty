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
  }

  create() {
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
    });

    this.blueBall = new Meteor(this.game, {
      x: 1200,
      y: 100,
      sprite: 'space-blue-ball',
      angularVelocity: -200,
      velocity: {
        x: 300,
        y: 300
      }
    });

    this.greyBall = new Meteor(this.game, {
      x: 200,
      y: 600,
      sprite: 'space-grey-ball',
      angularVelocity: -100,
      velocity: {
        x: 400,
        y: 400
      }
    });

    this.planet = this.game.add.sprite(
      0,
      this.game.height,
      'planet-enterence'
    );
    this.planet.anchor.setTo(0, 1);
    this.planet.width = this.game.width;
    this.planet.height = this.game.height;

    // this.yellowHead = this.game.add.sprite(
    //   650,
    //   this.game.height - 600,
    //   'constructor-yellow-head'
    // );
    // this.yellowHead.anchor.setTo(0.5);

    this.constructor = new Constructor({
      game: this.game,
      onSelect: this.onConstructorSelect,
    });

    this.apply = this.game.add.button(
      60, 
      this.game.height - 60,
      'constructor-apply', 
      () => console.log({
        name: this.inputName.value,
        wish: this.inputWish.value,
      })
    );
    this.apply.width = 325;
    this.apply.height = 40;
    this.apply.anchor.setTo(0, 1);

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
  }

  onConstructorSelect(value) {
    console.log(value);
  }

  update() {
    this.space.tilePosition.x -= 0.7;

    this.lemon.screenWrap();
    this.blueBall.screenWrap();
    this.greyBall.screenWrap();
  }
}
