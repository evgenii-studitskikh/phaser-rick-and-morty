import Frame from './frame';
import Select from './select';

export default class Constructor {

  constructor(game){

    this.frame = new Frame(game);

    this.arms = new Select(game, {
      name: 'arms',
      y: 730,
      spriteY: 730,
      spriteX: 250,
    });

    this.legs = new Select(game, {
      name: 'legs',
      y: 330,
      spriteY: 415,
      spriteX: 261,
    });
    
    this.body = new Select(game, {
      name: 'body',
      y: 530,
      spriteY: 610,
      spriteX: 250,
    });

    this.head = new Select(game, {
      name: 'head',
      y: 930,
      spriteY: 730,
      spriteX: 250,
    });
	}
}