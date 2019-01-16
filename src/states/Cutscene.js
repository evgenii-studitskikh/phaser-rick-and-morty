export default class Cutscene extends Phaser.State {

	constructor() {
		super();

		this.char3Text = [
			'Если человек родился с короткими ногами, \nбудут ли его скрещивать с другим \nуродливым человеком, а потом \nвыставлять их детей напоказ как такс?',
			'Text2',
			'Text3'
		]

		this.currentDialog = 0;
	}

  create() {

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
			window.innerWidth * window.devicePixelRatio, 
			window.innerHeight * window.devicePixelRatio, 
			2000, 
			1200, 
			'cutscene-planet'
		);
		this.planet.anchor.setTo(1);
		this.planet.scale.setTo(0.5);

		//character 3
		this.char3 = this.game.add.tileSprite(
			-100, 
			window.innerHeight * window.devicePixelRatio, 
			720, 
			530, 
			'cutscene-char3'
		);

		this.char3Direction = 'left';
		this.char3.rotation = 0.50;
		this.char3.anchor.setTo(0.5);
		this.char3.scale.setTo(0.1, 0.1);

		this.add.tween(this.char3).to( 
      { x: this.world.centerX/2	, y:this.world.centerY + 200 }, 
      6000, 
      Phaser.Easing.easeInOut,
      true,
      3000
		);
		
		this.add.tween(this.char3.scale).to( 
      { x: 1.5, y: 1.5 }, 
      6000, 
      Phaser.Easing.easeInOut,
      true,
      3000
		);

		//dialog
		setTimeout(() => {
      this.showDialog()
    }, 10000);
		
		
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
			395,
			290,
			'cutscene-dialog'
		);
		this.dialog.anchor.setTo(0, 1);
		this.dialog.scale.setTo(2, 2);

		this.dialogText = this.add.text(
      this.world.centerX + 100, 
			this.world.centerY - 350,
      this.char3Text[this.currentDialog], 
      { 
        fontFamily: 'Ubuntu', 
        fontSize: 28, 
        fill: '#000000',
        align: 'center'
      }
    );
		this.dialogText.anchor.setTo(0.5);
		
		//skip button
		this.buttonSkip = this.add.button(
      this.world.centerX + 320, 
			this.world.centerY - 160,
      'cutscene-arrow-next',
      () => this.handleSkipClick()
    );
    this.buttonSkip.anchor.setTo(0.5);
		this.buttonSkip.scale.setTo(1);
	}

	handleSkipClick() {

		if (this.currentDialog < this.char3Text.length - 1) {
			this.dialogText.text = this.char3Text[++this.currentDialog]
		} 
		else {

			this.add.tween(this.dialog).to( 
				{ alpha: 0 }, 
				1000, 
				Phaser.Easing.easeInOut,
				true,
				false
			);

			this.add.tween(this.buttonSkip).to( 
				{ alpha: 0 }, 
				100, 
				Phaser.Easing.easeInOut,
				true,
				false
			);
			
			this.add.tween(this.dialogText).to( 
				{ alpha: 0 }, 
				100, 
				Phaser.Easing.easeInOut,
				true,
				false
			);

			this.add.tween(this.char3).to( 
				{ x: this.game.width - 200, y: this.game.height - 350}, 
				6000, 
				Phaser.Easing.easeInOut,
				true,
				false
			);

			this.add.tween(this.char3.scale).to( 
				{ x: 0, y: 0 }, 
				6000, 
				Phaser.Easing.easeInOut,
				true
			);

			this.add.tween(this.planet.scale).to( 
				{ x: 10, y: 10 }, 
				3000, 
				Phaser.Easing.easeInOut,
				true,
				10000
			);
	
			this.add.tween(this.planet).to( 
				{ 
					x: window.innerWidth*1.2 * window.devicePixelRatio, 
					y: window.innerHeight*3 * window.devicePixelRatio,  
				}, 
				3000, 
				Phaser.Easing.easeInOut,
				true,
				10000
			);

			this.add.tween(this.planet).to( 
				{ alpha: 0 }, 
				3000, 
				Phaser.Easing.easeInOut,
				true,
				12000
			);

			this.add.tween(this.space).to( 
				{ alpha: 0 }, 
				1000, 
				Phaser.Easing.easeInOut,
				true,
				12000
			);

			this.add.tween(this.planet.scale).to( 
				{ x: 5, y: 5 }, 
				6000, 
				Phaser.Easing.easeInOut,
				true,
				10000
			);
	
			this.add.tween(this.planet).to( 
				{ 
					x: window.innerWidth*1.2 * window.devicePixelRatio, 
					y: window.innerHeight*2.8 * window.devicePixelRatio,  
				}, 
				6000, 
				Phaser.Easing.easeInOut,
				true,
				10000
			);

			setTimeout(() => {
				this.game.state.start('Enterence');
			}, 15000);
		}
	}

  update() {
    this.space.tilePosition.x -= 20.0;
		
		if (this.char3.rotation > 0.5) {
			this.char3Direction = 'right';
		}

		if (this.char3.rotation < 0.2) {
			this.char3Direction = 'left';
		}

		if (this.char3Direction === 'left') {
			this.char3.rotation += 0.001;
		}

		if (this.char3Direction === 'right') {
			this.char3.rotation -= 0.001;
		}
  }
}
