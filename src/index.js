import Boot from './states/Boot';
import Preload from './states/Preload';
import Main from './states/Main';

class Game extends Phaser.Game {

	constructor() {
		super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO);

		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('Main', Main, false);

		this.state.start('Boot');
	}

}

new Game();
