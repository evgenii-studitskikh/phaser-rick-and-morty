import Frame from './frame';
import Select from './select';

export default class Constructor {

  constructor(game){

    this.frame = new Frame(game);

    this.select = new Select(game, {
      name: 'body',
      y: 730,
    });

    this.select = new Select(game, {
      name: 'head',
      y: 930,
    });

    this.select = new Select(game, {
      name: 'legs',
      y: 530,
    });
	}
}