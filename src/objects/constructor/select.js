export default class Select {

  constructor(game, options){

    this.name = options.name;
    this.currentSprite = 1;

    this.arrow_right = game.add.button(
      730, 
      game.height - options.y, 
      'constructor-arrow-right', 
      () => this.handleRightClick()
    );
    this.arrow_right.anchor.setTo(0.5);
    
    this.arrow_left = game.add.button(
      550, 
      game.height - options.y,
      'constructor-arrow-left', 
      () => this.handleLeftClick()
    );
    this.arrow_left.anchor.setTo(0.5);

    this.selectValue = game.add.image(
      640, 
      game.height - options.y,
      `constructor-select-${options.name}`
    );
    this.selectValue.anchor.setTo(0.5);

    this.sprite = game.add.sprite(
      250, 
      game.height - options.y + 100,
      options.name + this.currentSprite
    );
    this.sprite.anchor.setTo(0.5);

    this.soundClick = game.sound.add('click');
  }

  handleLeftClick() {
    this.soundClick.play();
    this.sprite.loadTexture(this.name + --this.currentSprite);
  }

  handleRightClick() {
    this.soundClick.play();
    this.sprite.loadTexture(this.name + ++this.currentSprite);
  }
}