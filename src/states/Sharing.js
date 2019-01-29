import Meteor from '../objects/space/meteor';

export default class Sharing extends Phaser.State {

  create() {

    this.game.scale.setGameSize(
      window.innerWidth, 
      window.innerHeight
    );
    
    //background
    this.space = this.add.sprite(
      0,
      0,
      'space'
    );

    this.lemon = new Meteor(this.game, {
      x: 100,
      y: 100,
      sprite: 'space-lemon',
      angularVelocity: -200,
      velocity: {
        x: -800,
        y: 0
      }
    });

    this.blueBall = new Meteor(this.game, {
      x: 1200,
      y: 100,
      sprite: 'space-blue-ball',
      angularVelocity: -200,
      velocity: {
        x: -800,
        y: 100
      }
    });

    this.bgGroundSharing = this.add.tileSprite(
      0,
      this.world.height-201,
      this.game.width,
      201,
      'bg-sharing-ground2'
    );

    this.bottle = new Meteor(this.game, {
      x: 200,
      y:  window.innerHeight,
      sprite: 'bottle',
      angularVelocity: 10,
      velocity: {
        x: 200,
        y: 0
      }
    });

    this.office = this.add.sprite(
      this.world.centerX,
      this.world.height - 150,
      'office-house'
    );
    this.office.anchor.setTo(0.5);

    this.logoPicom = this.add.sprite(
      this.world.centerX,
      337,
      'logo-picom'
    );
    this.logoPicom.anchor.setTo(0.5);

    this.textThanks = this.add.text(
      this.world.centerX,
      475,
      'Спасибо, что с нами!',
      {
        font: '28px Lasco',
        fill: '#fff',
      }
    );
    this.textThanks.anchor.setTo(0.5);

    this.buttonBackParty = this.add.button(
      this.world.centerX-140,
      565,
      'btn-back-party',
      this.handlerClickBackParty,
      this
    );

    this.buttonBackParty.anchor.set(0.5);

    this.buttonCreatePerson = this.add.button(
      this.world.centerX+140,
      565,
      'btn-create-person',
      this.handlerClickCreatePerson,
      this
    );
    this.buttonCreatePerson.anchor.set(0.5);

    this.sosialsTitle = this.add.text(
      this.world.centerX,
      661,
      'Расскажи друзьям о нашей вечеринке:',
      {
        font: '16px Lasco',
        fill: '#fff',
      }
    );
    this.sosialsTitle.anchor.setTo(0.5);

    this.buttonVk = this.add.button(
      this.world.centerX-102,
      717,
      'vk',
      this.handlerClickVk,
      this
    );
    this.buttonVk.anchor.set(0.5);

    this.buttonFacebook = this.add.button(
      this.world.centerX-34,
      717,
      'facebook',
      this.handlerClickFacebook,
      this
    );
    this.buttonFacebook.anchor.set(0.5);

    this.buttonTwitter= this.add.button(
      this.world.centerX+34,
      717,
      'twitter',
      this.handlerClickTwitter,
      this
    );
    this.buttonTwitter.anchor.set(0.5);


    this.buttonOk= this.add.button(
      this.world.centerX+102,
      717,
      'ok',
      this.handlerClickOk,
      this
    );
    this.buttonOk.anchor.set(0.5);

  };

  handlerClickBackParty() {
    this.game.state.start('Party');
  }

  handlerClickCreatePerson() {
    this.game.state.start('Enterence');
  }

  handlerClickVk() {
    window.open("https://vk.com/share.php?url=https://www.picom.ru/", "_blank");
  }

  handlerClickFacebook(){
    window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.picom.ru%2F&amp;src=sdkpreparse", "_blank");
  }

  handlerClickTwitter() {
    window.open("http://twitter.com/share?&url=https://www.picom.ru/", "_blank");
  }

  handlerClickOk() {
    window.open("https://connect.ok.ru/offer?url=https://www.picom.ru/", "_blank");
  }
  // https://connect.ok.ru/offer
  //   ?url=URL_TO_SHARE
  // &title=TITLE
  // &imageUrl=IMAGE_URL

  update() {
    this.blueBall.screenWrap();
    this.lemon.screenWrap();
  }
}
