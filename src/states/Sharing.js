import Meteor from '../objects/space/meteor';

export default class Sharing extends Phaser.State {

  create() {

    this.game.scale.setGameSize(
      window.innerWidth,
      window.innerHeight
    );

    //устанавливаем размеры игрового мира:
    this.world.setBounds(0, 0, window.innerWidth, window.innerHeight);
    
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
      },
      sound: '4_lemon_click'
    });

    this.blueBall = new Meteor(this.game, {
      x: 1200,
      y: 100,
      sprite: 'space-blue-ball',
      angularVelocity: -200,
      velocity: {
        x: -800,
        y: 100
      },
      sound: '5_ball_click'
    });


    this.bottle = new Meteor(this.game, {
      x: 200,
      y:  window.innerHeight,
      sprite: 'bottle',
      angularVelocity: 10,
      velocity: {
        x: 200,
        y: 0
      },
      sound: '12_girl_click'
    });

    this.bgGroundSharing = this.add.tileSprite(
      0,
      this.world.height-201,
      this.game.width,
      201,
      'bg-sharing-ground2'
    );

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
      'btn-back-party-sprite',
      this.handlerClickBackParty,
      this, 1, 2, 0
    );
    this.buttonBackParty.anchor.set(0.5);
    this.buttonBackPartySound = this.add.audio('3_btn_back_party');
    this.buttonBackParty.events.onInputOver.add(()=>{this.buttonBackPartySound.play()});

    this.buttonCreatePerson = this.add.button(
      this.world.centerX+140,
      getVerticalPositionButtonsNextStep(),
      'btn-create-person-sprite',
      this.handlerClickCreatePerson,
      this, 1, 2, 0
    );
    this.buttonCreatePerson.anchor.set(0.5);
    this.buttonCreatePersonSound = this.add.audio('4_btn_add_new_person');
    this.buttonCreatePerson.events.onInputOver.add(()=>{this.buttonCreatePersonSound.play()});

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
      'vk-sprite',
      this.handlerClickVk,
      this, 1,2,0
    );
    this.buttonVk.anchor.set(0.5);
    this.buttonSharingSound = this.add.audio('2_btns_sharing');
    this.buttonVk.events.onInputOver.add(()=>{this.buttonSharingSound.play()});

    this.buttonFacebook = this.add.button(
      this.world.centerX,
      getVerticalPositionSocials(),
      'facebook-sprite',
      this.handlerClickFacebook,
      this, 1, 2, 0
    );
    this.buttonFacebook.anchor.set(0.5);
    this.buttonFacebook.events.onInputOver.add(()=>{this.buttonSharingSound.play()});

    this.buttonTwitter= this.add.button(
      this.world.centerX+68,
      getVerticalPositionSocials(),
      'twitter-sprite',
      this.handlerClickTwitter,
      this, 1, 2, 0
    );
    this.buttonTwitter.anchor.set(0.5);
    this.buttonTwitter.events.onInputOver.add(()=>{this.buttonSharingSound.play()});

    this.musicBgSharing = this.sound.add('1_final_bg', 0.3);
    this.sound.setDecodedCallback([ this.musicBgSharing ], this.startMusicSharing, this);
  };

  startMusicSharing() {
    this.musicBgSharing.play();
  }

  stopMusicSharing() {
    this.musicBgSharing.fadeOut(200);
    this.musicBgSharing.stop();
  }

  handlerClickBackParty() {
    this.game.state.start('Party');
    this.stopMusicSharing();
  }

  handlerClickCreatePerson() {
    this.game.state.start('Enterence');
    this.stopMusicSharing();
  }

  handlerClickVk() {
    window.open("https://vk.com/share.php?url=https://picom.ru/19years/", "_blank");
  }

  handlerClickFacebook(){
    window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpicom.ru%2F19years%2F&amp;src=sdkpreparse", "_blank");
  }

  handlerClickTwitter() {
    window.open("http://twitter.com/share?&url=https://picom.ru/19years/", "_blank");
  }

  handlerClickOk() {
    window.open("https://connect.ok.ru/offer?url=https://picom.ru/19years/", "_blank");
  }

  update() {
    this.blueBall.screenWrap();
    this.lemon.screenWrap();
  }

  getSizePosition(elementHeight) {
    const groundBottomHeight = 201;
    let spaceHeight = this.game.height - groundBottomHeight;
  }
}
