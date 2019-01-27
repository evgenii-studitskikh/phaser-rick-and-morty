import Character from '../objects/character';

export default class Party extends Phaser.State {
  constructor() {
    super();

    this.pojecotorData = [
      {key: 'planet-photo1', text: ''},
      {key: 'planet-photo2', text: ''},
      {key: 'planet-photo3', text: ''},
      {key: 'planet-photo4', text: ''},
      {key: 'planet-photo5', text: ''},
      {key: 'planet-photo6', text: ''}
    ]

    this.commentsNode = document.createElement('section');
  }

  create() {

    this.moving = 0;
    const bgImgWidth = 2649;
    const bgImgHeight = 1632;
    const widthCommentsList = 400;
    const self = this;

    //устанавливаем размеры игрового мира:
    this.world.setBounds(0, 0, bgImgWidth, bgImgHeight);

    //задаем размеры и позицию камеры:
    this.camera.setSize(window.innerWidth - widthCommentsList, window.innerHeight);
    this.camera.setPosition((bgImgWidth - window.innerWidth + widthCommentsList) / 2, (bgImgHeight - window.innerHeight) / 2);

    //дабавляем спрайт фона:
    this.clubBg = this.add.sprite(0, 0, 'party-club-bg');

    //добавляем обработку событий мыши:
    this.cursors = this.input.keyboard.createCursorKeys();

    //подключаем фоновую музыку:
    this.music1 = this.add.audio('1track');
    this.music2 = this.add.audio('2track');
    this.music3 = this.add.audio('3track');
    this.music4 = this.add.audio('4track');
    this.music5 = this.add.audio('5track');
    this.music6 = this.add.audio('6track');
    this.music7 = this.add.audio('7track');
    this.music8 = this.add.audio('8track');
    this.music9 = this.add.audio('9track');
    this.music10 = this.add.audio('10track');
    this.music11 = this.add.audio('11track');
    this.music12 = this.add.audio('12track');
    this.music13 = this.add.audio('13track');
    this.musicArr = [this.music1, this.music2, this.music3, this.music4, this.music5, this.music6, this.music7, this.music8, this.music9, this.music10, this.music11, this.music12, this.music13];
    this.indexMusic = this.randomInteger(0, this.musicArr.length);

    //запуск музыки:
    // this.sound.setDecodedCallback( this.musicArr, this.startMusic, this);

    //Двигаем камеру:
    this.input.onDown.add(this.toggle, this);

    //Добавляем аудио мониторы:
    this.audioMonitorLeft = this.add.sprite(1800, 600, 'audio-monitor-sprite', 0);
    this.audioMonitorRight = this.add.sprite(2195, 795, 'audio-monitor-sprite', 0);
    //Включаем обработку событий
    this.audioMonitorLeft.inputEnabled = true;
    this.audioMonitorRight.inputEnabled = true;
    this.audioMonitorLeft.input.pixelPerfectClick = true;
    this.audioMonitorRight.input.pixelPerfectClick = true;
    this.audioMonitorLeft.input.useHandCursor = true;
    this.audioMonitorRight.input.useHandCursor = true;
    //переключаем треки при клике на монитор
    this.audioMonitorLeft.events.onInputDown.add(() => {
      this.handlerAudioMonitor();
    }, this);
    this.audioMonitorRight.events.onInputDown.add(() => {
      this.handlerAudioMonitor();
    }, this);

    //создание анимации акустики
    this.audioMonitorLeft.animations.add('animate', [0, 1, 2, 3, 4, 2, 4, 3, 2, 1], 3, true);
    this.audioMonitorRight.animations.add('animate', [1, 2, 3, 4, 0, 4, 2, 4, 3, 2], 3, true);

    //Проектор:
    let photo;
    this.photoProjector = this.add.group();
    const arrPhoto = this.pojecotorData.map(element => {
      photo = this.photoProjector.create(1960, 566, element.key);
      photo.customParams = {text: element.text};
      photo.alpha = 0;
      return photo;
    });

    this.currentPhoto = this.photoProjector.getRandom();
    this.currentPhoto.alpha = 0;

    //Кнопки для листания фото:
    this.buttonPrev = this.add.sprite(1960, 566, 'change-photo-button');
    this.buttonPrev.alpha = 0.1;
    this.buttonPrev.inputEnabled = true;
    this.buttonPrev.input.pixelPerfectClick = true;
    this.buttonPrev.input.useHandCursor = true;
    this.buttonPrev.customParams = {direction: -1};
    this.buttonPrev.events.onInputDown.add(this.changePhotoProjector, this);

    this.buttonNext = this.add.sprite(2080, 627, 'change-photo-button');
    this.buttonNext.alpha = 0.1;
    this.buttonNext.inputEnabled = true;
    this.buttonNext.input.pixelPerfectClick = true;
    this.buttonNext.input.useHandCursor = true;
    this.buttonNext.customParams = {direction: 1};
    this.buttonNext.events.onInputDown.add(this.changePhotoProjector, this);

    //портал для перехода на конечную страницу:

    this.buttonPortalParty = this.add.sprite(2030,84,'portal-sprite-party', 0);
    this.buttonPortalParty.customParams =
      {
        sound: self.add.audio('rickportal-sound', 0.9),
        soundOut: self.add.audio('rickportal-sound-reverse', 0.9)
      };
    this.buttonPortalParty.inputEnabled = true;
    this.buttonPortalParty.input.pixelPerfectClick = true;
    this.buttonPortalParty.input.useHandCursor = true;
    this.buttonPortalParty.animations.add('animatePortalOver', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 8, false);
    this.buttonPortalParty.animations.add('animatePortalOut', [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 8, false);
    this.buttonPortalParty.events.onInputDown.add(this.handlerClickButtonPortalParty, this);

    this.buttonPortalParty.events.onInputOver.add(this.handlerOverButtonPortalParty, this);
    this.buttonPortalParty.events.onInputOut.add(this.handlerOutButtonPortalParty, this);

    //request for data fetching
    const request = new XMLHttpRequest();
    request.open('GET', 'https://picom.ru/rm-api/?action=list', false);
    request.send();

    if (request.status != 200) {

      console.log('error')
    } else {
      

      this.commentsNode.classList.add('comments');
      let commentsList = '';

      JSON.parse(request.response).map((item, index) => {
        new Character(this.game, item.body);

        let figure = {};

        item.body.split(';').map(item => {
          figure[item.split(':')[0]] = 
            item.split(':')[0] !== 'name' && item.split(':')[0] !== 'message' 
              ? parseInt(item.split(':')[1])
              : item.split(':')[1]
        });

        if (figure.name && figure.message) {
          commentsList += `
            <li class="comments__item" data-id=${index}>
              <div class="comments__header">
                <div class="comments__user">${figure.name}</div>
              </div>
              <div class="comments__message">
                ${figure.message}
              </div>
            </li>
          `;
        }
      });
   
      const commentsInner = `
        <h2 class="comments__title">Поздравления</h2>
        <div class="comments__list-inner">
          <ul class="comments__list">
            ${commentsList}
          </ul>
        </div>  
      `;

      this.commentsNode.innerHTML = commentsInner;
      document.body.appendChild(this.commentsNode);
    }
  }

  handlerClickButtonPortalParty() {
    this.commentsNode.style.display = 'none';
    this.game.state.start('Sharing');
  }

  handlerOverButtonPortalParty() {
    this.buttonPortalParty.play('animatePortalOver');
    this.buttonPortalParty.customParams.sound.play();
  }

  handlerOutButtonPortalParty() {
    this.buttonPortalParty.play('animatePortalOut');
    this.buttonPortalParty.customParams.soundOut.play();
  }

  changePhotoProjector(button, event) {
    let newPhoto;
    if (button.customParams.direction > 0) {
      newPhoto = this.photoProjector.next();
    } else {
      newPhoto = this.photoProjector.previous();
    }
    newPhoto.alpha = 1;
    this.currentPhoto.alpha = 0;
    this.currentPhoto = newPhoto;

  }

  handlerAudioMonitor() {
    this.musicArr[this.indexMusic].onStop.add(() => {
    });
    this.musicArr[this.indexMusic].stop();
    this.indexMusic = this.indexMusic === this.musicArr.length - 1 ? 0 : ++this.indexMusic;
    this.startMusic();
  }

  startMusic() {
    this.musicArr[this.indexMusic].onPlay.add(this.animateAudioMonitors, this);
    this.musicArr[this.indexMusic].play();
    this.musicArr[this.indexMusic].onStop.add(() => this.changeMusic(this.indexMusic, this.musicArr), this);
  }

  changeMusic(indexMusic, musicArr) {
    indexMusic = indexMusic === musicArr.length - 1 ? 0 : ++indexMusic;
    musicArr[indexMusic].play();
    musicArr[indexMusic].onStop.add(() => this.changeMusic(indexMusic, musicArr));
  }

  animateAudioMonitors() {
    this.audioMonitorLeft.play('animate');
    this.audioMonitorRight.play('animate');
  }

  cancelAnimationAudioMonitors() {
    this.audioMonitorLeft.animations.stop(null, false);
    this.audioMonitorRight.animations.stop(null, false);
  }

  toggle() {
    this.moving = (this.moving === 0) ? this.moving = 1 : this.moving = 0;
  }

  update() {
    if (this.moving === 0) {
      if (this.cursors.up.isDown) {
        this.camera.y -= 4;
      }
      else if (this.cursors.down.isDown) {
        this.camera.y += 4;
      }

      if (this.cursors.left.isDown) {
        this.camera.x -= 4;
      }
      else if (this.cursors.right.isDown) {
        this.camera.x += 4;
      }
    }
    else {
      if (this.cursors.left.isDown) {
        this.x -= 4;
      }
      else if (this.cursors.right.isDown) {
        this.x += 4;
      }

      if (this.cursors.up.isDown) {
        this.y -= 4;
      }
      else if (this.cursors.down.isDown) {
        this.y += 4;
      }
    }

  }

  changeVolume(pointer) {
    if (pointer.y < 300) {
      this.musicArr[this.indexMusic].pause();
    }
    else {
      this.musicArr[this.indexMusic].resume();
    }
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

}
