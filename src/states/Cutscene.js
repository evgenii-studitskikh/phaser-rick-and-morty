export default class Cutscene extends Phaser.State {

  create() {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.stage.backgroundColor = '#fffff';

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

    this.planet = this.game.add.tileSprite(
			window.innerWidth * window.devicePixelRatio - this.game.cache.getImage('planet').width/2, 
			window.innerHeight * window.devicePixelRatio - this.game.cache.getImage('planet').height/2, 
			this.game.cache.getImage('planet').width, 
			this.game.cache.getImage('planet').height, 
			'planet'
		);

		this.rick = this.game.add.tileSprite(
			600, 
			100, 
			this.game.cache.getImage('rick').width, 
			this.game.cache.getImage('rick').height, 
			'rick'
		);

		this.rickDirection = 'left';
		this.rick.rotation = 0.50;
		this.rick.scale.setTo(0.5, 0.5);
		
		this.music = this.sound.add('soundtrack');
		
		this.sound.setDecodedCallback([ this.music ], this.start, this);

		// this.button = this.game.add.button(200, 200, 'button', this.click, this, 0, 1, 2);
	}
	
	start() {
		this.music.play();
	}

	click() {

	}

  update() {
    this.mountainsBack.tilePosition.x -= 2.0;
    this.mountainsMid1.tilePosition.x -= 4.0;
		this.mountainsMid2.tilePosition.x -= 8.0;
		
		if (this.rick.rotation > 0.63) {
			this.rickDirection = 'right';
		}

		if (this.rick.rotation < 0.6) {
			this.rickDirection = 'left';
		}

		if (this.rickDirection === 'left') {
			this.rick.rotation += 0.01;
		}

		if (this.rickDirection === 'right') {
			this.rick.rotation -= 0.01;
		}
  }
}
