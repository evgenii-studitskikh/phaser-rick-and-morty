import Frame from './frame';
import Select from './select';

export default class Constructor {

  constructor({game, onSelect}){

    this.frame = new Frame(game);

    this.spritesGroup = game.add.group();

    this.armsRight = new Select(game, {
      name: 'arms_right',
      y: 440,
      spriteY: 466,
      spriteX: 244,
      onSelect: (value) => onSelect(value, 'arms_right')
    });
    this.spritesGroup.add(this.armsRight.sprite);

    this.legs = new Select(game, {
      name: 'legs',
      y: 120,
      spriteY: 335,
      spriteX: 221,
      onSelect: (value) => onSelect(value, 'legs')
    });
    this.spritesGroup.add(this.legs.sprite);
    
    this.body = new Select(game, {
      name: 'body',
      y: 280,
      spriteY: 530,
      spriteX: 210,
      onSelect: (value) => onSelect(value, 'body')
    });
    this.spritesGroup.add(this.body.sprite);

    this.armsLeft = new Select(game, {
      name: 'arms_left',
      y: 590,
      spriteY: 460,
      spriteX: 170,
      onSelect: (value) => onSelect(value, 'arms_left')
    });
    this.spritesGroup.add(this.armsLeft.sprite);

    this.head = new Select(game, {
      name: 'head',
      y: 750,
      spriteY: 650,
      spriteX: 210,
      onSelect: (value) => onSelect(value, 'head')
    });
    this.spritesGroup.add(this.head.sprite);

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

  preview() {

    this.spritesGroup.scale.setTo(0.6);
    this.spritesGroup.x = 700;
    this.spritesGroup.y = 450;
  }

  reset() {

    this.spritesGroup.scale.setTo(1);
    this.spritesGroup.x = 0;
    this.spritesGroup.y = 0;
  }
}