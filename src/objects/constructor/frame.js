export default class Frame {

  constructor(game){
    this.frame = game.add.image(0, 200, 'frame');

    this.frame.scale.setTo(1.5, 1.5);
  }
}