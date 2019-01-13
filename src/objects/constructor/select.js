'use strict';

export default class Select {

  constructor(game){
    this.textData = ['head1', 'head2', 'head3', 'head4', 'head5', 'head6', 'head7', 'head8', 'head9'];
    this.currentIndex = 0;

    this.arrow_right = game.add.button(950, 250, 'arrow', () => this.handleRightClick());
    this.arrow_left = game.add.button(800, 300, 'arrow', () => this.handleLeftClick());

    this.selectValue = game.add.text(808, 245, this.textData[this.currentIndex], { 
      fontFamily: 'Arial', fontSize: 48, fill: '#ffffff' 
    });

    this.arrow_right.scale.setTo(0.2, 0.2);
    this.arrow_left.scale.setTo(0.2, 0.2);
    this.arrow_left.rotation = 3.2;

    this.head1 = game.add.sprite(400, 230, 'heads');
    this.head1.frame = 0;
    this.head1.scale.setTo(0.4, 0.4);

    this.soundClick = game.sound.add('click');
  }

  handleLeftClick() {
    if (this.currentIndex > 0) {
      this.soundClick.play();
      this.currentIndex--;
      this.selectValue.text = this.textData[this.currentIndex];
      this.head1.frame = this.currentIndex;
    }
  }

  handleRightClick() {
    if (this.currentIndex < this.textData.length - 1) {
      this.soundClick.play();
      this.currentIndex++;
      this.selectValue.text = this.textData[this.currentIndex];
      this.head1.frame = this.currentIndex;
    }
  }
}