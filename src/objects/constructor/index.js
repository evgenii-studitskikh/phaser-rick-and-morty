import Frame from './frame';
import Select from './select';

export default class Constructor {

  constructor({game, onSelect}){

    this.frame = new Frame(game);

    this.armsRight = new Select(game, {
      name: 'arms_right',
      y: 440,
      spriteY: 466,
      spriteX: 244,
      onSelect: (value) => onSelect(value, 'arms_right')
    });

    this.legs = new Select(game, {
      name: 'legs',
      y: 120,
      spriteY: 335,
      spriteX: 221,
      onSelect: (value) => onSelect(value, 'legs')
    });
    
    this.body = new Select(game, {
      name: 'body',
      y: 280,
      spriteY: 530,
      spriteX: 210,
      onSelect: (value) => onSelect(value, 'body')
    });

    this.armsLeft = new Select(game, {
      name: 'arms_left',
      y: 590,
      spriteY: 460,
      spriteX: 170,
      onSelect: (value) => onSelect(value, 'arms_left')
    });

    this.head = new Select(game, {
      name: 'head',
      y: 750,
      spriteY: 650,
      spriteX: 210,
      onSelect: (value) => onSelect(value, 'head')
    });

  }
  
  hide() {
    this.frame.hide();
    this.armsRight.hide();
    this.legs.hide();
    this.body.hide();
    this.armsLeft.hide();
    this.head.hide();
  }

  show() {
    this.frame.show();
    this.armsRight.show();
    this.legs.show();
    this.body.show();
    this.armsLeft.show();
    this.head.show();
  }
}