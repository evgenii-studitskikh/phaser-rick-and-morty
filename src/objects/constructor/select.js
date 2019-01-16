'use strict';

export default class Select {

  constructor(game){
    this.textData = ['head1', 'head2231', 'head3', 'head4', 'head5', 'head6', 'head7', 'head8', 'head9'];
    this.currentIndex = 0;

    this.arrow_right = game.add.button(
      740, 
      game.height - 900, 
      'constructor-arrow-right', 
      () => this.handleRightClick()
    );
    
    this.arrow_left = game.add.button(
      530, 
      game.height - 900,
      'constructor-arrow-left', 
      () => this.handleLeftClick()
    );

    this.selectValue = game.add.text( //change to picture
      643, 
      game.height - 887,
      this.textData[this.currentIndex], 
      { 
        fontFamily: 'Arial', fontSize: 28, fill: '#000000', align: 'center'
      }
    );
    this.selectValue.anchor.setTo(0.5);

    this.head = game.add.sprite(
      190, 
      game.height - 887,
      'heads'
    );
    this.head.frame = 0;
    this.head.scale.setTo(0.4, 0.4);

    this.soundClick = game.sound.add('click');
  }

  handleLeftClick() {
    if (this.currentIndex > 0) {
      this.soundClick.play();
      this.currentIndex--;
      this.selectValue.text = this.textData[this.currentIndex];
      this.head.frame = this.currentIndex;
    }
  }

  handleRightClick() {
    if (this.currentIndex < this.textData.length - 1) {
      this.soundClick.play();
      this.currentIndex++;
      this.selectValue.text = this.textData[this.currentIndex];
      this.head.frame = this.currentIndex;
    }
  }
}