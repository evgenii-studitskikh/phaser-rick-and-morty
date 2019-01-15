export default class Cutscene extends Phaser.State {

	constructor() {
		super();

		this.rickText = [
			'Text1',
			'Text2',
			'Text3'
		]

		this.currentDialog = 0;
	}

  create() {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//background
    this.space = this.game.add.tileSprite( 
			0,
			0, 
			this.game.width,
      this.game.height,
			'space'
    );

		//planet
    this.planet = this.game.add.tileSprite(
			window.innerWidth * window.devicePixelRatio - this.game.cache.getImage('planet').width/2, 
			window.innerHeight * window.devicePixelRatio - this.game.cache.getImage('planet').height/2, 
			this.game.cache.getImage('planet').width, 
			this.game.cache.getImage('planet').height, 
			'planet'
		);

		//rick
		this.rick = this.game.add.tileSprite(
			-100, 
			window.innerHeight * window.devicePixelRatio, 
			this.game.cache.getImage('rick').width, 
			this.game.cache.getImage('rick').height, 
			'rick'
		);

		this.rickDirection = 'left';
		this.rick.rotation = 0.50;
		this.rick.anchor.setTo(0.5);
		this.rick.scale.setTo(0.1, 0.1);

		this.add.tween(this.rick).to( 
      { x: this.world.centerX/2	, y:this.world.centerY + 200 }, 
      6000, 
      Phaser.Easing.easeInOut,
      true,
      3000
		);
		
		this.add.tween(this.rick.scale).to( 
      { x: 0.7, y: 0.7 }, 
      6000, 
      Phaser.Easing.easeInOut,
      true,
      3000
		);

		//dialog
		setTimeout(() => {
      this.showDialog()
    }, 100);
		
		
		this.music = this.sound.add('soundtrack');
		
		this.sound.setDecodedCallback([ this.music ], this.start, this);
	}
	
	start() {
		// this.music.play();
	}

	showDialog() {

		//dialog
		this.dialog = this.game.add.tileSprite(
			this.world.centerX - 300, 
			this.world.centerY + 70,
			this.game.cache.getImage('dialog').width, 
			this.game.cache.getImage('dialog').height, 
			'dialog'
		);
		this.dialog.anchor.setTo(0, 1);
		this.dialog.scale.setTo(2, 2);

		this.dialogText = this.add.text(
      this.world.centerX + this.game.cache.getImage('dialog').width - 330, 
			this.world.centerY - this.game.cache.getImage('dialog').height,
      this.rickText[this.currentDialog], 
      { 
        fontFamily: 'Arial', 
        fontSize: 28, 
        fill: '#000000',
        align: 'center'
      }
    );
		this.dialogText.anchor.setTo(0, 1);
		
		//skip button
		this.buttonSkip = this.add.button(
      this.world.centerX + this.game.cache.getImage('dialog').width - 290, 
			this.world.centerY - this.game.cache.getImage('dialog').height + 80,
      'arrow-skip',
      () => this.handleSkipClick()
    );
    this.buttonSkip.anchor.setTo(0.5);
		this.buttonSkip.scale.setTo(1);
	}

	handleSkipClick() {
		if (this.currentDialog < this.rickText.length - 1) {
			this.dialogText.text = this.rickText[++this.currentDialog]
		} 
		else {
			console.log('next character');
		}
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
