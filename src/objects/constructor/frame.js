export default class Frame {

  constructor(game){

    this.frame = game.add.image(
      40, 
      game.height - 40,
      'enterenece-constructor-bg'
    );
    this.frame.anchor.setTo(0, 1);
  }
}