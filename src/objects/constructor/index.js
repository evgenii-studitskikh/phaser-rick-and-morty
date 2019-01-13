import Frame from './frame';
import Select from './select';

export default class Constructor {

  constructor(game){

    this.frame = new Frame(game);
    this.select = new Select(game);
	}
}