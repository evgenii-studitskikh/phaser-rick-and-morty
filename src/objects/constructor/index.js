import Frame from './frame';
import Select from './select';

export default class Constructor {

  constructor({game, onSelect, wishText}){

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

    this.dialog = game.add.sprite(
      850, 
      game.height - 400,
      'dialog'
    );
    this.dialog.anchor.setTo(0.5);
    this.dialog.scale.setTo(0.7);

    this.dialogText = game.add.text(
      850, 
      game.height - 420,
      '',
      {
        font: '14px Lasco',
        fill: '#000',
        align: 'center',
        wordWrap: true, 
        wordWrapWidth: 180
      }
    );
    this.dialogText.anchor.setTo(0.5);
    this.dialogText.visible = false;
    this.dialog.visible = false;
  }
  
  hide() {
    this.frame.hide();
    this.armsRight.hide();
    this.legs.hide();
    this.body.hide();
    this.armsLeft.hide();
    this.head.hide();

    this.dialogText.visible = true;
    this.dialog.visible = true;
  }

  show() {
    this.frame.show();
    this.armsRight.show();
    this.legs.show();
    this.body.show();
    this.armsLeft.show();
    this.head.show();

    this.dialogText.visible = false;
    this.dialog.visible = false;
  }

  preview(wishText) {

    this.spritesGroup.scale.setTo(0.6);
    this.spritesGroup.x = 600;

    if (this.legs.currentSprite === 7) {
      this.spritesGroup.y = 550;
      this.dialogText.y = 600;
      this.dialog.y = 620;
    } else if (this.legs.currentSprite === 2) {
      this.spritesGroup.y = 500;
      this.dialogText.y = 550;
      this.dialog.y = 570;
    } else {
      this.spritesGroup.y = 450;
      this.dialogText.y = 500;
      this.dialog.y = 520;
    }

    this.dialogText.text = wishText.length > 50 
      ? wishText.substring(0, 50) + '...'
      : wishText;
  }

  reset() {

    this.spritesGroup.scale.setTo(1);
    this.spritesGroup.x = 0;
    this.spritesGroup.y = 0;
  }
}