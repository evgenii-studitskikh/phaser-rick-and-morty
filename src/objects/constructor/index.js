import Frame from './frame';
import Select from './select';

export default class Constructor {

  constructor(game){

    this.frame = new Frame(game);

    this.select = new Select(game, {
      name: 'arms',
      y: 730,
      spriteY: 730,
      spriteX: 250,
    });

    this.select = new Select(game, {
      name: 'legs',
      y: 330,
      spriteY: 415,
      spriteX: 260,
    });
    
    this.select = new Select(game, {
      name: 'body',
      y: 530,
      spriteY: 610,
      spriteX: 250,
    });

    this.select = new Select(game, {
      name: 'head',
      y: 930,
      spriteY: 730,
      spriteX: 250,
    });
	}
}