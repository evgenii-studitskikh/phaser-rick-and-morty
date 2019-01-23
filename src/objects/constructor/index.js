import Frame from './frame';
import Select from './select';

export default class Constructor {

  constructor({game, onSelect}){

    this.frame = new Frame(game);

    this.arms = new Select(game, {
      name: 'arms',
      y: 590,
      spriteY: 650,
      spriteX: 210,
      onSelect: (value) => onSelect(value)
    });

    this.legs = new Select(game, {
      name: 'legs',
      y: 280,
      spriteY: 335,
      spriteX: 221,
      onSelect: (value) => onSelect(value)
    });
    
    this.body = new Select(game, {
      name: 'body',
      y: 440,
      spriteY: 530,
      spriteX: 210,
      onSelect: (value) => onSelect(value)
    });

    this.head = new Select(game, {
      name: 'head',
      y: 750,
      spriteY: 650,
      spriteX: 210,
      onSelect: (value) => onSelect(value)
    });

    this.random = new Select(game, {
      name: 'random',
      y: 120
    });
	}
}