import Meteor from '../objects/space/meteor';

export default class Sharing extends Phaser.State {

  create() {
    this.world.setBounds(0, 0, this.game.width, this.game.height);

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

    const mobileMaxHeight = 600;
    const tabletMaxHeight = 768;
    const desktopMiddleMaxHeight = 900;

    const getVerticalPositionLogo = () => {
      if(window.matchMedia("(max-height: " + mobileMaxHeight + "px)").matches) {
        return 130
      }
      else if(window.matchMedia("(max-height: " + tabletMaxHeight + "px)").matches) {
        return 200
      }
      else if(window.matchMedia("(max-height: " + desktopMiddleMaxHeight + "px)").matches) {
        return 250
      }
      return 337;
    };

    this.logoPicom = this.add.sprite(
      this.world.centerX,
      getVerticalPositionLogo(),
      'logo-picom'
    );
    this.logoPicom.anchor.setTo(0.5);
    this.getSizePosition();

    const getVerticalPositionThanks = () => {
      if(window.matchMedia("(max-height: " + mobileMaxHeight + "px)").matches) {
        return 190
      }
      else if(window.matchMedia("(max-height: " + tabletMaxHeight + "px)").matches) {
        return 275
      }
      else if(window.matchMedia("(max-height: " + desktopMiddleMaxHeight + "px)").matches) {
        return 325
      }
      return 475;
    };
    this.textThanks = this.add.text(
      this.world.centerX,
      getVerticalPositionThanks(),
      'Спасибо, что с нами!',
      {
        font: '28px Lasco',
        fill: '#fff',
      }
    );
    this.textThanks.anchor.setTo(0.5);

    const getVerticalPositionButtonsNextStep = () => {
      if(window.matchMedia("(max-height: " + mobileMaxHeight + "px)").matches) {
        return 250
      }
      else if(window.matchMedia("(max-height: " + tabletMaxHeight + "px)").matches) {
        return 355
      }
      else if(window.matchMedia("(max-height: " + desktopMiddleMaxHeight + "px)").matches) {
        return 405
      }
      return 565;
    };
    this.buttonBackParty = this.add.button(
      this.world.centerX-140,
      getVerticalPositionButtonsNextStep(),
      'btn-back-party',
      this.handlerClickBackParty,
      this
    );

    this.buttonBackParty.anchor.set(0.5);

    this.buttonCreatePerson = this.add.button(
      this.world.centerX+140,
      getVerticalPositionButtonsNextStep(),
      'btn-create-person',
      this.handlerClickCreatePerson,
      this
    );
    this.buttonCreatePerson.anchor.set(0.5);

    const getVerticalPositionSocialsTitle = () => {
      if(window.matchMedia("(max-height: " + mobileMaxHeight + "px)").matches) {
        return 300
      }

      else if(window.matchMedia("(max-height: " + tabletMaxHeight + "px)").matches) {
        return 425
      }

      else if(window.matchMedia("(max-height: " + desktopMiddleMaxHeight + "px)").matches) {
        return 475
      }

      return 661;
    };
    this.socialsTitle = this.add.text(
      this.world.centerX,
      getVerticalPositionSocialsTitle(),
      'Расскажи друзьям о нашей вечеринке:',
      {
        font: '16px Lasco',
        fill: '#fff',
      }
    );
    this.socialsTitle.anchor.setTo(0.5);

    const getVerticalPositionSocials = () => {
      if(window.matchMedia("(max-height: " + mobileMaxHeight + "px)").matches) {
        return 350
      }
      else if(window.matchMedia("(max-height: " + tabletMaxHeight + "px)").matches) {
        return 475
      }
      else if(window.matchMedia("(max-height: " + desktopMiddleMaxHeight + "px)").matches) {
        return 525
      }
      return 717;
    };
    this.buttonVk = this.add.button(
      this.world.centerX-68,
      getVerticalPositionSocials(),
      'vk',
      this.handlerClickVk,
      this
    );
    this.buttonVk.anchor.set(0.5);

    this.buttonFacebook = this.add.button(
      this.world.centerX,
      getVerticalPositionSocials(),
      'facebook',
      this.handlerClickFacebook,
      this
    );
    this.buttonFacebook.anchor.set(0.5);

    this.buttonTwitter= this.add.button(
      this.world.centerX+68,
      getVerticalPositionSocials(),
      'twitter',
      this.handlerClickTwitter,
      this
    );
    this.buttonTwitter.anchor.set(0.5);


    // this.buttonOk= this.add.button(
    //   this.world.centerX+102,
    //   getVerticalPositionSocials(),
    //   'ok',
    //   this.handlerClickOk,
    //   this
    // );
    // this.buttonOk.anchor.set(0.5);

  };

  handlerClickBackParty() {
    this.game.state.start('Party');
  }

  handlerClickCreatePerson() {
    this.game.state.start('Enterence');
  }

  handlerClickVk() {
    window.open("https://vk.com/share.php?url=http://19.chunks.ru/", "_blank");
  }

  handlerClickFacebook(){
    window.open("https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F19.chunks.ru%2F&amp;src=sdkpreparse", "_blank");
  }

  handlerClickTwitter() {
    window.open("http://twitter.com/share?&url=http://19.chunks.ru/", "_blank");
  }

  handlerClickOk() {
    window.open("https://connect.ok.ru/offer?url=http://19.chunks.ru/", "_blank");
  }
  // https://connect.ok.ru/offer
  //   ?url=URL_TO_SHARE
  // &title=TITLE
  // &imageUrl=IMAGE_URL

  update() {
    this.blueBall.screenWrap();
    this.lemon.screenWrap();
  }

  getSizePosition(elementHeight) {
    const groundBottomHeight = 201;
    let spaceHeight = this.game.height - groundBottomHeight;
    console.log('---height:', this.game.height);
    console.log('--- spaceHeight:', spaceHeight);


  }
}
