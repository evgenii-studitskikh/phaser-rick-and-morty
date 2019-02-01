import Boot from './states/Boot';
import Preload from './states/Preload';
import Cutscene from './states/Cutscene';
import Enterence from './states/Enterence';
import Intro from './states/Intro';
import Party from './states/Party';
import Sharing from './states/Sharing';

class Game extends Phaser.Game {

  constructor() {
    super(
      window.innerWidth,
      window.innerHeight
    );

    this.state.add('Boot', Boot, false);
    this.state.add('Preload', Preload, false);
    this.state.add('Cutscene', Cutscene, false);
    this.state.add('Enterence', Enterence, false);
    this.state.add('Intro', Intro, false);
    this.state.add('Party', Party, false);
    this.state.add('Sharing', Sharing, false);
    if (window.innerWidth <= 768 || (window.matchMedia("(max-width: 768px)").matches) ) {
      console.log('close');
    } else {
      this.state.start('Boot');
    }
  }
}

if (window.innerWidth <= 768 || (window.matchMedia("(max-width: 768px)").matches)) {
  console.log('close');
} else {
  new Game();
}
