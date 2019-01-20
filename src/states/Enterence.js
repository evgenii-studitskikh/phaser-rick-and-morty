import Constructor from '../objects/constructor';
import Meteor from '../objects/space/meteor';

export default class Enterence extends Phaser.State {

  create() {
    this.space = this.game.add.tileSprite(
      0,
      0,
      this.game.width,
      this.game.height,
      'space'
    );

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

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
      this.game.height - 500,
      'planet-enterence'
    );
    this.planet.anchor.setTo(0, 0.5);
    this.planet.width = this.game.width;

    this.yellowHead = this.game.add.sprite(
      650,
      this.game.height - 600,
      'constructor-yellow-head'
    );
    this.yellowHead.anchor.setTo(0.5);

    this.constructor = new Constructor(this.game);

    this.apply = this.game.add.button(
      270, 
      this.game.height - 100,
      'constructor-apply', 
      () => console.log('handle apply')
    );
    this.apply.anchor.setTo(0.5);
  }

  update() {
    this.space.tilePosition.x -= 0.7;

    this.lemon.screenWrap();
    this.blueBall.screenWrap();
    this.greyBall.screenWrap();
  }
}
