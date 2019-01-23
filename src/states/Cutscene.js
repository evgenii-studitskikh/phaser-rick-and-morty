import Meteor from '../objects/space/meteor';

export default class Cutscene extends Phaser.State {

	constructor() {
		super();

		this.charText = [
			'Пикому исполнилось 19 лет.',
			'Нет более подходящего момента для \n выпивки и зловещей расчётливой речи, \n от которой душа уйдёт в пятки.',
			'Речи о политике... О порядке... \n Братстве... Власти. Но речи — удел \n агитаторов. Настало время для тех, кто \n действует…',
			'Если человек родился с короткими \n ногами, будут ли его скрещивать с \n другим уродливым человеком, а потом \n выставлять их детей напоказ как такс?',
			'Конечно, да! Настало время риксанутых \n экспериментов.',
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
		
		//meteors
		this.blueBall = new Meteor(this.game, {
      x: 1200,
      y: 100,
      sprite: 'space-blue-ball',
      angularVelocity: -200,
      velocity: {
        x: -800,
        y: 100
      }
		});
		
		this.lemon = new Meteor(this.game, {
      x: 100,
      y: 100,
      sprite: 'space-lemon',
      angularVelocity: -200,
      velocity: {
        x: -800,
        y: 0
      }
    });

		//planet
    this.planet = this.game.add.tileSprite(
			window.innerWidth * window.devicePixelRatio, 
			window.innerHeight * window.devicePixelRatio, 
			2050, 
			1000, 
			'cutscene-planet'
		);
		this.planet.anchor.setTo(1);
		this.planet.scale.setTo(0.5);

		//character
		this.char = this.game.add.tileSprite(
			-100, 
			window.innerHeight * window.devicePixelRatio, 
			720, 
			530, 
			'cutscene-char'
		);

		this.charDirection = 'left';
		this.char.rotation = 0.50;
		this.char.anchor.setTo(0.5);
		this.char.scale.setTo(0.1, 0.1);

		this.add.tween(this.char).to( 
      { x: this.world.centerX/2	, y:this.world.centerY + 200 }, 
      6000, 
      Phaser.Easing.easeInOut,
      true,
      3000
		);
		
		const tweenCharScale = this.add.tween(this.char.scale).to( 
      { x: 1.5, y: 1.5 }, 
      6000, 
      Phaser.Easing.easeInOut,
      true,
      3000
		);


		tweenCharScale.onComplete.add(this.showDialog, this);
		
		this.music = this.sound.add('soundtrack');
		
		this.sound.setDecodedCallback([ this.music ], this.start, this);
	}
	
	start() {
		this.music.play();
		this.music.loopFull();
	}

	showDialog() {

		//dialog
		this.dialog = this.game.add.sprite(
			this.world.centerX - 300, 
			this.world.centerY + 70,
			'cutscene-dialog'
		);
		this.dialog.anchor.setTo(0, 1);
		this.dialog.scale.setTo(2, 2);

		this.dialogText = this.add.text(
      this.world.centerX + 140, 
			this.world.centerY - 300,
      this.charText[this.currentDialog], 
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
			this.world.centerY - 100,
      'cutscene-arrow-next',
      () => this.handleSkipClick()
    );
    this.buttonSkip.anchor.setTo(0.5);

		//back button
		this.buttonBack = this.add.button(
      this.world.centerX + 120, 
			this.world.centerY - 100,
      'cutscene-arrow-prev',
      () => this.handleBackClick()
    );
    this.buttonBack.anchor.setTo(0.5);
	}

	handleBackClick() {
		if (this.currentDialog > 0) {
			this.dialogText.text = this.charText[--this.currentDialog]
		}
	}

	handleSkipClick() {

		if (this.currentDialog < this.charText.length - 1) {
			this.dialogText.text = this.charText[++this.currentDialog]
		} 
		else {

			this.add.tween(this.dialog).to( 
				{ alpha: 0 }, 
				500, 
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

			this.add.tween(this.buttonBack).to( 
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

			this.add.tween(this.char).to( 
				{ x: this.game.width - 200, y: this.game.height - 350}, 
				4000, 
				Phaser.Easing.easeInOut,
				true,
				1000
			);

			const tweenCharScale = this.add.tween(this.char.scale).to( 
				{ x: 0, y: 0 }, 
				4000, 
				Phaser.Easing.easeOut,
				true,
				1000
			);

			tweenCharScale.onComplete.add(this.showInvitation, this);

			// this.add.tween(this.planet.scale).to( 
			// 	{ x: 10, y: 10 }, 
			// 	3000, 
			// 	Phaser.Easing.easeInOut,
			// 	true,
			// 	10000
			// );
	
			// this.add.tween(this.planet).to( 
			// 	{ 
			// 		x: window.innerWidth*1.2 * window.devicePixelRatio, 
			// 		y: window.innerHeight*3 * window.devicePixelRatio,  
			// 	}, 
			// 	3000, 
			// 	Phaser.Easing.easeInOut,
			// 	true,
			// 	10000
			// );

			// this.add.tween(this.planet).to( 
			// 	{ alpha: 0 }, 
			// 	3000, 
			// 	Phaser.Easing.easeInOut,
			// 	true,
			// 	12000
			// );

			// this.add.tween(this.space).to( 
			// 	{ alpha: 0 }, 
			// 	1000, 
			// 	Phaser.Easing.easeInOut,
			// 	true,
			// 	12000
			// );

			// this.add.tween(this.planet.scale).to( 
			// 	{ x: 5, y: 5 }, 
			// 	6000, 
			// 	Phaser.Easing.easeInOut,
			// 	true,
			// 	10000
			// );
	
			// this.add.tween(this.planet).to( 
			// 	{ 
			// 		x: window.innerWidth*1.2 * window.devicePixelRatio, 
			// 		y: window.innerHeight*2.8 * window.devicePixelRatio,  
			// 	}, 
			// 	6000, 
			// 	Phaser.Easing.easeInOut,
			// 	true,
			// 	10000
			// );

			setTimeout(() => {
				this.game.state.start('Enterence');
			}, 15000);
		}
	}

	showInvitation() {

		this.dialog = this.game.add.sprite(
			this.world.centerX, 
			this.world.centerY - 300,
			'cutscene-invitation'
		);
		this.dialog.anchor.setTo(0.5, 0.5);

		this.dialog = this.game.add.sprite(
			this.world.centerX, 
			this.world.centerY - 150,
			'cutscene-invitation-2'
		);
		this.dialog.anchor.setTo(0.5, 0.5);

		this.dialog = this.game.add.sprite(
			this.world.centerX, 
			this.world.centerY,
			'cutscene-accept-button'
		);
		this.dialog.anchor.setTo(0.5, 0.5);
	}

  update() {
    this.space.tilePosition.x -= 20.0;
		
		if (this.char.rotation > 0.5) {
			this.charDirection = 'right';
		}

		if (this.char.rotation < 0.2) {
			this.charDirection = 'left';
		}

		if (this.charDirection === 'left') {
			this.char.rotation += 0.001;
		}

		if (this.charDirection === 'right') {
			this.char.rotation -= 0.001;
		}

		this.blueBall.screenWrap();
		this.lemon.screenWrap();
  }
}
