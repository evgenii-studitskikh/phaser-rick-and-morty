export default class Frame {

  constructor(game){

    this.frame = game.add.image(
      40, 
      game.height - 40,
      'enterenece-constructor-bg'
    );
    this.frame.width = 600;
    this.frame.height = 788;
    this.frame.anchor.setTo(0, 1);
  }

  hide() {
    this.frame.visible = false;
  }

  show() {
    this.frame.visible = true;
  }
}