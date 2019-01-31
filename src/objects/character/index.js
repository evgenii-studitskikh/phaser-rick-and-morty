import { bodyparts } from '../../data/Bodyparts';

export default class Character {

  constructor({id, game, data, height}){

    this.game = game;
    this.id = id;

    if (data) {
      let figure = {};

      this.charGroup = game.add.group();

      data.split(';').map(item => {
        figure[item.split(':')[0]] =
          item.split(':')[0] !== 'name' && item.split(':')[0] !== 'message'
            ? parseInt(item.split(':')[1])
            : item.split(':')[1]
      })

      if (figure.arms_right) {
        
        const x = bodyparts[`arms_right${figure.arms_right}`] ? bodyparts[`arms_right${figure.arms_right}`].x : 0;
        const y = bodyparts[`arms_right${figure.arms_right}`] ? bodyparts[`arms_right${figure.arms_right}`].y : 0;

        this.armRight = game.add.sprite(
          figure.x + 34 + x,
          height + figure.y + 64 + y,
          `arms_right${figure.arms_right}`
        );
        this.armRight.anchor.setTo(0.5);

        this.charGroup.add(this.armRight);
      }

      if (figure.legs) {
        
        const x = bodyparts[`legs${figure.legs}`] ? bodyparts[`legs${figure.legs}`].x : 0;
        const y = bodyparts[`legs${figure.legs}`] ? bodyparts[`legs${figure.legs}`].y : 0;

        this.legs = game.add.sprite(
          figure.x + 11 + x,
          height + figure.y + 195 + y,
          `legs${figure.legs}`
        );
        this.legs.anchor.setTo(0.5);

        this.charGroup.add(this.legs);
      }

      if (figure.body) {

        const x = bodyparts[`body${figure.body}`] ? bodyparts[`body${figure.body}`].x : 0;
        const y = bodyparts[`body${figure.body}`] ? bodyparts[`body${figure.body}`].y : 0;

        this.body = game.add.sprite(
          figure.x + x,
          height + figure.y + y,
          `body${figure.body}`
        );
        this.body.anchor.setTo(0.5);

        this.charGroup.add(this.body);
      }

      if (figure.arms_left) {

        const x = bodyparts[`arms_left${figure.arms_left}`] ? bodyparts[`arms_left${figure.arms_left}`].x : 0;
        const y = bodyparts[`arms_left${figure.arms_left}`] ? bodyparts[`arms_left${figure.arms_left}`].y : 0;

        this.armLeft = game.add.sprite(
          figure.x - 40 + x,
          height + figure.y + 70 + y,
          `arms_left${figure.arms_left}`
        );
        this.armLeft.anchor.setTo(0.5);

        this.charGroup.add(this.armLeft);
      }


      if (figure.head) {
        
        const x = bodyparts[`head${figure.head}`] ? bodyparts[`head${figure.head}`].x : 0;
        const y = bodyparts[`head${figure.head}`] ? bodyparts[`head${figure.head}`].y : 0;

        this.head = game.add.sprite(
          figure.x + x,
          height + figure.y - 120 + y,
          `head${figure.head}`
        );
        this.head.anchor.setTo(0.5);

        this.charGroup.add(this.head);

        this.charGroup.scale.setTo(0.6);

        this.dialog = game.add.sprite(
          figure.x + x + 210,
          height + figure.y - 230 + y,
          'dialog'
        );
        this.dialog.anchor.setTo(0.5);
        this.charGroup.add(this.dialog);
    
        this.dialogText = game.add.text(
          figure.x + x + 210,
          height + figure.y - 250 + y,
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
        this.dialogText.scale.setTo(1.4);
        this.charGroup.add(this.dialogText);

        this.dialogText.text = figure.message.length > 50 
          ? figure.message.substring(0, 50) + '...'
          : figure.message;

        this.dialog.visible = false;
        this.dialogText.visible = false;
      }

       // this.charGroup.forEach( 
        //   (item) => this.makeDraggable(item)
        // )
    }
  }
  
  makeDraggable(item) {
    item.inputEnabled = true;
    item.input.enableDrag();

    let dragStartPos = {
      x: 0,
      y: 0
    };
    let isFirstDrag = true;
    let dragCameraStart = {
      x: this.game.camera.x,
      y: this.game.camera.y
    }

    item.events.onDragStart.add((obj, pointer) => {
      if (isFirstDrag) {
        dragStartPos.x = pointer.x;
        dragStartPos.y = pointer.y;
      }

      dragCameraStart = {
        x: this.game.camera.x,
        y: this.game.camera.y
      }

      isFirstDrag = false;
    });


    item.events.onDragUpdate.add((obj, pointer, x, y, snapPoint, isFirstUpdate) => {
      if ( isFirstUpdate ) {
        obj.origin = new Phaser.Point( obj.x, obj.y );
        obj.parent.origin = new Phaser.Point( obj.parent.x, obj.parent.y );

        dragCameraStart = {
          x: this.game.camera.x,
          y: this.game.camera.y
        }
      }

      obj.parent.x = pointer.x - dragStartPos.x - dragCameraStart.x + this.game.camera.x;
      obj.parent.y = pointer.y - dragStartPos.y - dragCameraStart.y + this.game.camera.y;

      obj.x = obj.origin.x;
      obj.y = obj.origin.y;

      console.log(pointer.x + this.game.camera.x, pointer.y + this.game.camera.y);
    });
  }

  toggleDialog(id) {
    if(id === this.id) {
      this.dialog.visible = true;
      this.dialogText.visible = true;
      this.game.world.bringToTop(this.charGroup)
      // this.game.camera.x = this.dialog.x;
      // this.game.camera.y = this.dialog.y;
    } else {
      this.dialog.visible = false;
      this.dialogText.visible = false;
      
    }
  }
}