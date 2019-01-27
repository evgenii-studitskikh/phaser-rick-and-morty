import { bodyparts } from '../../data/Bodyparts';

export default class Character {

  constructor(game, data){

    if (data) {
      let figure = {};

      data.split(';').map(item => {
        figure[item.split(':')[0]] = parseInt(item.split(':')[1]);
      })

      if (figure.arm_right) {

        const x = bodyparts[`arm_right${figure.arm_right}`] ? bodyparts[`arm_right${figure.arm_right}`].x : 0;
        const y = bodyparts[`arm_right${figure.arm_right}`] ? bodyparts[`arm_right${figure.arm_right}`].y : 0;

        this.armRight = game.add.sprite(
          figure.x + 34 + x,
          game.height - figure.y + 64 + y,
          `arms_right${figure.arm_right}`
        );
        this.armRight.anchor.setTo(0.5);
      }

      if (figure.legs) {
        
        const x = bodyparts[`legs${figure.legs}`] ? bodyparts[`legs${figure.legs}`].x : 0;
        const y = bodyparts[`legs${figure.legs}`] ? bodyparts[`legs${figure.legs}`].y : 0;

        this.legs = game.add.sprite(
          figure.x + 11 + x,
          game.height - figure.y + 195 + y,
          `legs${figure.legs}`
        );
        this.legs.anchor.setTo(0.5);
      }

      if (figure.body) {

        const x = bodyparts[`body${figure.body}`] ? bodyparts[`body${figure.body}`].x : 0;
        const y = bodyparts[`body${figure.body}`] ? bodyparts[`body${figure.body}`].y : 0;

        this.body = game.add.sprite(
          figure.x + x,
          game.height - figure.y + y,
          `body${figure.body}`
        );
        this.body.anchor.setTo(0.5);
      }

      if (figure.arm_left) {
        
        const x = bodyparts[`arm_left${figure.arm_left}`] ? bodyparts[`arm_left${figure.arm_left}`].x : 0;
        const y = bodyparts[`arm_left${figure.arm_left}`] ? bodyparts[`arm_left${figure.arm_left}`].y : 0;

        this.armLeft = game.add.sprite(
          figure.x - 40 + x,
          game.height - figure.y + 70 + y,
          `arms_left${figure.arm_left}`
        );
        this.armLeft.anchor.setTo(0.5);
      }

      if (figure.head) {
        
        const x = bodyparts[`head${figure.head}`] ? bodyparts[`head${figure.head}`].x : 0;
        const y = bodyparts[`head${figure.head}`] ? bodyparts[`head${figure.head}`].y : 0;

        this.head = game.add.sprite(
          figure.x + x,
          game.height - figure.y - 120 + y,
          `head${figure.head}`
        );
        this.head.anchor.setTo(0.5);
      }
      
    }
	}
}