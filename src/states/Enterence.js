import Constructor from '../objects/constructor';

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

    this.lemon = this.game.add.sprite(
      900, 
      300, 
      'space-lemon'
    );
    this.lemon.anchor.set(0.5);
    this.game.physics.enable(this.lemon, Phaser.Physics.ARCADE);
    this.lemon.body.angularVelocity = -200;
    this.lemon.body.velocity.setTo(-200, -200);

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

    this.space.tilePosition.x -= 0.3;

    this.screenWrap(this.lemon);
  }

  screenWrap(sprite) {
    if (sprite.x < 0)
    {
      sprite.x = this.game.width;
    }
    else if (sprite.x > this.game.width)
    {
      sprite.x = 0;
    }

    if (sprite.y < 0)
    {
      sprite.y = this.game.height;
    }
    else if (sprite.y > this.game.height)
    {
      sprite.y = 0;
    }
  }
}
