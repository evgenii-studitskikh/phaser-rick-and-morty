export default class Cutscene extends Phaser.State {

  create() {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.space = this.game.add.tileSprite( 
			0,
			0, 
			this.game.width,
      this.game.height,
			'space'
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
		this.rick.scale.setTo(0.7, 0.7);
		
		this.music = this.sound.add('soundtrack');
		
		this.sound.setDecodedCallback([ this.music ], this.start, this);
	}
	
	start() {
		this.music.play();
	}

	click() {

	}

  update() {
    this.space.tilePosition.x -= 20.0;
		
		if (this.rick.rotation > 0.8) {
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
