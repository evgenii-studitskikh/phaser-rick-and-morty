import { bodyparts } from '../../data/Bodyparts';

export default class Select {

  constructor(game, options){
    this.name = options.name;
    this.game = game;
    this.posX = options.spriteX || 0;
    this.posY = options.spriteY || 0;
    this.currentSprite = 1;
    this.onSelect = options.onSelect;

    this.arrow_right = this.game.add.button(
      600, 
      this.game.height - options.y, 
      'constructor-arrow-right', 
      this.handleRightClick,
      this, 0, 1, 0
    );
    this.arrow_right.anchor.setTo(0.5);
    this.arrow_right_sound = game.add.audio('3_btn_constructor_right');
    
    this.arrow_left = this.game.add.button(
      450, 
      this.game.height - options.y,
      'constructor-arrow-left', 
      this.handleLeftClick,
      this, 0, 1, 0
    );
    this.arrow_left.anchor.setTo(0.5);
    this.arrow_left_sound = game.add.audio('4_btn_constructor_left');


    this.selectValue = this.game.add.image(
      525, 
      this.game.height - options.y,
      `constructor-select-${options.name}`
    );
    this.selectValue.anchor.setTo(0.5);


    if (options.spriteY || options.spriteX) {
      const x = bodyparts[`${this.name}1`] ? bodyparts[`${this.name}1`].x : 0;
      const y = bodyparts[`${this.name}1`] ? bodyparts[`${this.name}1`].y : 0;

      this.sprite = this.game.add.sprite(
        options.spriteX + x,
        this.game.height - options.spriteY + y,
        options.name + this.currentSprite
      );
      this.sprite.anchor.setTo(0.5);
    }

  }

  correctPosition(pos) {
    
    if (pos && pos.x && pos.y) {
      this.sprite.x = this.posX + pos.x;
      this.sprite.y = this.game.height - this.posY + pos.y;
    }
  }

  handleLeftClick() {
    const name = this.name + --this.currentSprite;

    if (bodyparts[name]) {
      this.arrow_left_sound.play();
      this.correctPosition(bodyparts[name]);
      this.sprite.loadTexture(name);
      this.onSelect(this.currentSprite);
    }
    else {
      this.currentSprite++;
    }
  }

  handleRightClick() {
    const name = this.name + ++this.currentSprite;

    if (bodyparts[name]) {
      this.arrow_right_sound.play();
      this.correctPosition(bodyparts[name]);
      this.sprite.loadTexture(name);
      this.onSelect(this.currentSprite);
    }
    else {
      this.currentSprite--;
    }
  }

  hide() {
    this.arrow_right.visible = false;
    this.arrow_left.visible = false;
    this.selectValue.visible = false;
  }

  show() {
    this.arrow_right.visible = true;
    this.arrow_left.visible = true;
    this.selectValue.visible = true;
  }
}