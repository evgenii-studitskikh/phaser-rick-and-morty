export default class Meteor {

  constructor(game, options){

    this.game = game;

    this.meteor = this.game.add.sprite(
      options.x,
      options.y,
      options.sprite
    );
    this.meteor.anchor.set(0.5);

    this.meteor.inputEnabled = true;
    this.meteor.input.pixelPerfectClick = true;
    this.meteor.input.useHandCursor = true;
    this.meteor.input.useHandCursor = true;
    this.meteor.sound = this.game.add.audio(options.sound, 1);
    this.meteor.events.onInputDown.add(()=>{
      this.meteor.sound.play();
      options.onClick();
    }, this);

    this.game.physics.enable(this.meteor, Phaser.Physics.ARCADE);
    this.meteor.body.angularVelocity = options.angularVelocity || null;
    this.meteor.body.velocity.setTo(
      options.velocity && options.velocity.x || -200, 
      options.velocity && options.velocity.y || -200
    );
  }

  screenWrap() {
    if (this.meteor.x < 0)
    {
      this.meteor.x = this.game.width;
    }
    else if (this.meteor.x > this.game.width)
    {
      this.meteor.x = 0;
    }

    if (this.meteor.y < 0)
    {
      this.meteor.y = this.game.height;
    }
    else if (this.meteor.y > this.game.height)
    {
      this.meteor.y = 0;
    }
  }
}