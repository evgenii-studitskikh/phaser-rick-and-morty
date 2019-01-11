export default class Main extends Phaser.State {

	create() {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.stage.backgroundColor = '#697e96';

    this.mountainsBack = this.game.add.tileSprite(0, 
        this.game.height - this.game.cache.getImage('mountains-back').height, 
        this.game.width, 
        this.game.cache.getImage('mountains-back').height, 
        'mountains-back'
    );

    this.mountainsMid1 = this.game.add.tileSprite(0, 
        this.game.height - this.game.cache.getImage('mountains-mid1').height, 
        this.game.width, 
        this.game.cache.getImage('mountains-mid1').height, 
        'mountains-mid1'
    );

    this.mountainsMid2 = this.game.add.tileSprite(0, 
        this.game.height - this.game.cache.getImage('mountains-mid2').height, 
        this.game.width, 
        this.game.cache.getImage('mountains-mid2').height, 
        'mountains-mid2'
    );      
  }

  update() {
    this.mountainsBack.tilePosition.x -= 0.05;
    this.mountainsMid1.tilePosition.x -= 0.3;
    this.mountainsMid2.tilePosition.x -= 0.75;      
  }
}
