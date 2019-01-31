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

	hideSprite(sprite, duration) {
		this.add.tween(sprite).to( 
			{ alpha: 0 }, 
			duration, 
			Phaser.Easing.easeInOut,
			true,
			false
		).onComplete.add(() => sprite.destroy());
	}

	preload() {

		this.fontLoader = this.add.text(
      0, 
			0,
      ' ', 
      { 
        font: '14px Lasco',
      }
    );
	}

  create() {

		this.game.scale.setGameSize(
      window.innerWidth, 
      window.innerHeight
		);
		
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
      },
			sound: '5_ball_click'
		});
		
		this.lemon = new Meteor(this.game, {
      x: 100,
      y: 100,
      sprite: 'space-lemon',
      angularVelocity: -200,
      velocity: {
        x: -800,
        y: 0
      },
			sound: '4_lemon_click'
    });


		//planet
    this.planet = this.game.add.sprite(
			window.innerWidth, 
			window.innerHeight,
			'cutscene-planet'
		);
		this.planet.anchor.setTo(1);
		this.planet.width = 500;
		this.planet.height = 250;

		//character
		this.char = this.game.add.sprite(
			-100, 
			window.innerHeight,
			'cutscene-char'
		);
    this.char.inputEnabled = true;
    this.char.input.pixelPerfectClick = true;
    this.char.input.useHandCursor = true;
    this.soundCharArr = [this.add.audio('6_rick_click'), this.add.audio('8_rick_click_3'), this.add.audio('7_small_rick_click')];
		this.char.events.onInputDown.add(()=>{this.soundCharArr[this.randomInteger(0, 2)].play()});

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
      { x: 0.7, y: 0.7 }, 
      6000, 
      Phaser.Easing.easeInOut,
      true,
      3000
		);

		tweenCharScale.onComplete.add(this.showDialog, this);
		
		this.cutsceneMusic = this.sound.add('1_bg_space', 0.2);

		this.sound.setDecodedCallback([ this.cutsceneMusic ], this.start, this);
	}
	
	start() {
		this.cutsceneMusic.play();
		this.cutsceneMusic.loopFull();
	}

	showDialog() {

		//dialog
		this.dialog = this.game.add.sprite(
			this.world.centerX - 300, 
			this.world.centerY + 70,
			'cutscene-dialog'
		);
		this.dialog.anchor.setTo(0, 1);

		this.dialogText = this.add.text(
      this.world.centerX - 80, 
			this.world.centerY - 110,
      this.charText[this.currentDialog], 
      { 
        font: 'Lasco', 
        fontSize: 14, 
        fill: '#000000',
        align: 'center'
      }
    );
		this.dialogText.anchor.setTo(0.5);
		
		//skip button
		this.buttonSkip = this.add.button(
      this.world.centerX + 30, 
			this.world.centerY - 20,
      'cutscene-arrow-next',
      () => this.handleSkipClick()
    );
		this.buttonSkip.anchor.setTo(0.5);
		this.buttonSkip.scale.setTo(0.5);
		this.buttonSkipSound = this.add.audio('2_btn_next');

		//back button
		this.buttonBack = this.add.button(
      this.world.centerX - 70, 
			this.world.centerY - 20,
      'cutscene-arrow-prev',
      () => this.handleBackClick()
    );
		this.buttonBack.anchor.setTo(0.5);
		this.buttonBack.scale.setTo(0.5);
    this.buttonBackSound = this.add.audio('3_btn_back');
	}

	handleBackClick() {
    this.buttonBackSound.play();
		if (this.currentDialog > 0) {
			this.dialogText.text = this.charText[--this.currentDialog]
		}
	}

	handleSkipClick() {
    this.buttonSkipSound.play();
		if (this.currentDialog < this.charText.length - 1) {
			this.dialogText.text = this.charText[++this.currentDialog]
		} 
		else {

			this.hideSprite(this.dialog, 100);
			this.hideSprite(this.buttonSkip, 100);
			this.hideSprite(this.buttonBack, 100);
			this.hideSprite(this.dialogText, 100);

			this.add.tween(this.char).to( 
				{ x: this.game.width - 180, y: this.game.height - 230}, 
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
		}
	}

	showInvitation() {

		this.invateText1 = this.add.text(
      this.world.centerX, 
			this.world.centerY - 70,
      'У нас день рождения, и мы приглашаем всех \n на виртуальную вечеринку', 
      { 
        font: 'Lasco', 
        fontSize: 18, 
        fill: '#FFFFFF',
        align: 'center'
      }
    );
		this.invateText1.anchor.setTo(0.5, 0.5);

		this.invateText2 = this.add.text(
      this.world.centerX, 
			this.world.centerY,
      'Создай своё альтер-эго, придумай имя и давай к нам на праздник', 
      { 
        font: 'Lasco', 
        fontSize: 14, 
        fill: '#FFFFFF',
        align: 'center'
      }
    );
		this.invateText2.anchor.setTo(0.5, 0.5);

		this.enterPartyButton = this.add.button(
      this.world.centerX,
			this.world.centerY + 70,
      'cutscene-accept-button',
      () => this.moveToEnterence()
    );
		this.enterPartyButton.anchor.setTo(0.5);
    this.enterPartyButtonSound = this.add.audio('13_btn_obshift');

		this.enterPartyButtonText = this.add.text(
      this.world.centerX,
			this.world.centerY + 70,
      'О-о-о... Да… Пора швифтануться...', 
      { 
        font: 'Lasco', 
        fontSize: 14, 
        fill: '#FFFFFF',
        align: 'center'
      }
    );
		this.enterPartyButtonText.anchor.setTo(0.5);
	}

	moveToEnterence() {
    this.enterPartyButtonSound.play();
    this.cutsceneMusic.fadeOut(200);
		this.hideSprite(this.invateText1, 100);
		this.hideSprite(this.invateText2, 100);
		this.hideSprite(this.enterPartyButton, 100);
		this.hideSprite(this.enterPartyButtonText, 100);

		const tweenPlanetScale = this.add.tween(this.planet.scale).to( 
			{ x: 1.2, y: 1.2 }, 
			5000, 
			Phaser.Easing.easeInOut,
			true
		);

		tweenPlanetScale.onComplete.add(
      () => this.game.state.start('Enterence')
    );
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

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
}
