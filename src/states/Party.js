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
      {key: 'planet-photo6', text: ''},
      {key: 'planet-photo7', text: ''},
      {key: 'planet-photo8', text: ''},
      {key: 'planet-photo9', text: ''},
      {key: 'planet-photo10', text: ''},
      {key: 'planet-photo11', text: ''},
      {key: 'planet-photo12', text: ''},
    ];

    this.commentsNode = document.createElement('section');

    this.lockCamera = false;

    this.characters = [];
  }

  create() {

    this.game.scale.setGameSize(
      window.innerWidth, 
      window.innerHeight
		);

    if (window.Event) {
      document.captureEvents(Event.MOUSEMOVE);
    }

    document.onmousemove = (e) => {
      this.lockCamera = e.identifier !== 0;
    };

    const bgImgWidth = 2649;
    const bgImgHeight = 1632;
    const widthCommentsList = 400;
    const self = this;

    //устанавливаем размеры игрового мира:
    this.world.setBounds(0, 0, bgImgWidth, bgImgHeight);

    //задаем размеры и позицию камеры:
    this.camera.setSize(window.innerWidth - widthCommentsList, window.innerHeight);
    this.camera.setPosition((bgImgWidth - window.innerWidth + widthCommentsList) / 2, (bgImgHeight - window.innerHeight) / 2);

    // дабавляем спрайт фона:
    this.clubBg = this.add.sprite(0, 0, 'party-club-bg');

    //добавляем обработку событий мыши:
    this.cursors = this.input.keyboard.createCursorKeys();

    //подключаем фоновую музыку:
    // this.music1 = this.add.audio('1track', 0.2);
    // this.music2 = this.add.audio('2track', 0.2);
    // this.music3 = this.add.audio('3track', 0.2);
    // this.music4 = this.add.audio('4track', 0.2);
    // this.music5 = this.add.audio('6track', 0.2);
    // this.music6 = this.add.audio('7track', 0.2);
    // this.music7 = this.add.audio('8track', 0.2);
    // this.music8 = this.add.audio('9track', 0.2);
    this.music10 = this.add.audio('10track', 0.2);
    this.music9 = this.add.audio('11track', 0.2);
    // this.music11 = this.add.audio('12track', 0.2);
    // this.music12 = this.add.audio('13track', 0.2);
    // this.musicArr = [this.music1, this.music2, this.music3, this.music4, this.music5];
    // this.isRandom = false;
    // if(!this.isRandom) {
    //   this.indexMusic = this.randomInteger(0, this.musicArr.length);
    //   this.isRandom = true;
    // }

    //запуск музыки:
    // this.sound.setDecodedCallback( this.musicArr, this.startMusic, this);
    this.sound.setDecodedCallback( this.music10 , this.startMusic, this);

    // this.musicEnterence = this.sound.add('1_bg_constructor', 0.1);
    // this.sound.setDecodedCallback([ this.musicEnterence ], this.start, this);

    //Добавляем аудио мониторы:
    this.audioMonitorLeft = this.add.sprite(1790, 590, 'audio-monitor-sprite', 0);
    this.audioMonitorRight = this.add.sprite(2195, 795, 'audio-monitor-sprite', 0);
    //Включаем обработку событий
    this.audioMonitorLeft.inputEnabled = true;
    this.audioMonitorRight.inputEnabled = true;
    this.audioMonitorLeft.input.pixelPerfectClick = true;
    this.audioMonitorRight.input.pixelPerfectClick = true;
    // this.audioMonitorLeft.input.useHandCursor = true;
    // this.audioMonitorRight.input.useHandCursor = true;
    //переключаем треки при клике на монитор
    // this.audioMonitorLeft.events.onInputDown.add(() => {
    //   this.handlerAudioMonitor();
    // }, this);
    // this.audioMonitorRight.events.onInputDown.add(() => {
    //   this.handlerAudioMonitor();
    // }, this);

    this.audioMonitorLeft.events.onInputOver.add(()=>{
      this.audioMonitorLeft.play('animateHover');
    }, this);
    this.audioMonitorRight.events.onInputOver.add(()=>{
      this.audioMonitorRight.play('animateHover');
    }, this);

    this.audioMonitorLeft.events.onInputOut.add(()=>{
      this.audioMonitorLeft.play('animate');
    }, this);
    this.audioMonitorRight.events.onInputOut.add(()=>{
      this.audioMonitorRight.play('animate');
    }, this);

    //анимации акустики
    this.audioMonitorLeft.animations.add('animate', [0, 1, 2, 3, 4, 2, 4, 3, 2, 1], 3, true);
    this.audioMonitorRight.animations.add('animate', [1, 2, 3, 4, 0, 4, 2, 4, 3, 2], 3, true);

    //ховер акустики
    this.audioMonitorLeft.animations.add('animateHover', [5], 3, true);
    this.audioMonitorRight.animations.add('animateHover', [5], 3, true);

    //Проектор:
    let photo;
    this.photoProjector = this.add.group();
    const arrPhoto = this.pojecotorData.map(element => {
      photo = this.photoProjector.create(1960, 566, element.key);
      photo.customParams = {text: element.text};
      photo.alpha = 0;
      return photo;
    });


    this.photoProjectorHoverImg = this.add.sprite(1960, 566,'monitor-hover');
    this.photoProjectorHoverImg.alpha = 0;

    this.photoProjectorHoverImg.inputEnabled = true;
    // this.photoProjectorHoverImg.input.pixelPerfectClick = true;
    this.photoProjectorHoverImg.input.useHandCursor = true;
    this.hoverImgIsActive = false;

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

    // Отображаем ховер на проекторе 1 раз
    this.buttonPrev.events.onInputOver.add(()=> {
      if(!this.hoverImgIsActive) {
        this.photoProjectorHoverImg.alpha = 1;
        setTimeout(()=> {
          this.photoProjectorHoverImg.alpha = 0;
        },1500);
        this.hoverImgIsActive = true;
      }
    });


    this.buttonNext = this.add.sprite(2080, 627, 'change-photo-button');
    this.buttonNext.alpha = 0.1;
    this.buttonNext.inputEnabled = true;
    this.buttonNext.input.pixelPerfectClick = true;
    this.buttonNext.input.useHandCursor = true;
    this.buttonNext.customParams = {direction: 1};
    this.buttonNext.events.onInputDown.add(this.changePhotoProjector, this);

    // Отображаем ховер на проекторе 1 раз
    this.buttonNext.events.onInputOver.add(()=> {
      if(!this.hoverImgIsActive) {
        this.photoProjectorHoverImg.alpha = 1;
        setTimeout(()=> {
          this.photoProjectorHoverImg.alpha = 0;
        },1500);
        this.hoverImgIsActive = true;
      }
    });

    //портал для перехода на конечную страницу:
    this.buttonPortalParty = this.add.sprite(2030, 84, 'portal-sprite-party', 0);
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
        const char = new Character({
          game: this.game, 
          data: item.body, 
          height: bgImgHeight,
          id: item.id
        });

        this.characters.push(char);
      });

      JSON.parse(request.response).reverse().map((item, index) => {

        let figure = {};

        item.body.split(';').map(item => {
          figure[item.split(':')[0]] =
            item.split(':')[0] !== 'name' && item.split(':')[0] !== 'message'
              ? parseInt(item.split(':')[1])
              : item.split(':')[1]
        });

        if (figure.name && figure.message) {
          commentsList += `
            <li class="comments__item" data-id=${item.id}>
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
        <div class="comments__inner">
          <div class="comments__list-inner">
            <ul class="comments__list">
              ${commentsList}
            </ul>
          </div>
           <section class="sharing">
            <a href="https://vk.com/share.php?url=http://19.chunks.ru/" target="_blank" class="sharing__link sharing__link--vk">
              Вконтакте
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F19.chunks.ru%2F&amp;src=sdkpreparse" target="_blank" class="sharing__link sharing__link--facebook">
              Facebook
            </a>
            <a href="http://twitter.com/share?&url=https://www.picom.ru/" target="_blank" class="sharing__link sharing__link--twitter">
              Twitter
            </a>
             <a href="" class="sharing__link sharing__link--help">
              help
            </a>
            
          </section>
        </div>
        <button class="close-help" >Закрыть спарвку</button>
        
      `;

      this.commentsNode.innerHTML = commentsInner;
      this.commentsNode.style="display:block";
      document.body.appendChild(this.commentsNode);
      // this.musicArr[this.indexMusic].onPlay.add(this.animateAudioMonitors, this);
      this.animateAudioMonitors();

      const commentsCollection = this.commentsNode.querySelectorAll('.comments__item')

      Array.from(commentsCollection).map(comment => {
        comment.addEventListener('click', () => {
          this.characters.map(char => char.toggleDialog(comment.dataset.id));
        })
      });
    }

    //дверь перехода в конструктор:
    this.doorBackConstructor = this.add.sprite(129, 701, 'door-party', 0);
    this.doorBackConstructor.alpha = 1;
    this.doorBackConstructor.inputEnabled = true;
    this.doorBackConstructor.input.useHandCursor = true;
    this.doorBackConstructor.input.pixelPerfectClick = true;
    this.doorBackInimationMouseOver = this.doorBackConstructor.animations.add('animateDoorOver', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 10, false);
    this.doorBackInimationMouseOut = this.doorBackConstructor.animations.add('animateDoorOut', [14,13,12,11,10,9,8,7,6,5,4,3,2,1,0], 12, false);
    this.doorBackConstructor.events.onInputOver.add(this.handlerOverBackConstructor, this);
    this.doorBackConstructor.events.onInputOut.add(this.handlerOutDoorBackConstructor, this);
    this.doorBackConstructor.events.onInputDown.add(this.handlerClickDoorBackConstructor, this);
    this.doorBackConstructorSoundOver =  this.add.audio('door_creak_open', 0.7);
    this.doorBackConstructorSoundOut =  this.add.audio('door_creak_close', 0.7);

    //добавляем справку:
    this.help = this.add.sprite(0,0, 'party-help-bg');
    this.help.inputEnabled = true;
    this.help.input.useHandCursor = true;

    //кнопка закрытия справки:
    this.buttonCloseHelp = document.querySelector('.close-help');
    if(this.buttonCloseHelp){
      this.buttonCloseHelp.addEventListener('click',(evt)=> this.handlerClickCloseHelp(evt));
    }

    //кнопка закрытия справки в комментаx:
    this.buttonOpenHelpComments = document.querySelector('.sharing__link--help');
    if(this.buttonOpenHelpComments){
      this.buttonOpenHelpComments.addEventListener('click',(evt)=> this.handlerClickButtonOpenHelpComments(evt));
    }

    //закрытие справки по клику на ESC:
    this.escapeKey = this.input.keyboard.addKey(Phaser.Keyboard.ESC);
    this.escapeKey.onDown.add(this.handlerClickCloseHelp, this);

  }

  handlerOverBackConstructor() {
    this.doorBackInimationMouseOver.play();
    this.doorBackConstructorSoundOver.play();
  }

  handlerOutDoorBackConstructor() {
    this.doorBackInimationMouseOut.play();
    this.doorBackConstructorSoundOut.play();
  }

  handlerClickDoorBackConstructor() {
    this.commentsNode.style.display = 'none';
    // this.stopMusic();
    this.music10.stop();
    this.game.state.start('Enterence');
  }

  handlerClickCloseHelp() {
    this.help.kill();
    this.buttonCloseHelp.style = 'display:none';
  }

  handlerClickButtonOpenHelpComments(evt){
    evt.preventDefault();
    this.help.revive();
    this.buttonCloseHelp.style = 'display:block';
  }

  handlerClickButtonPortalParty() {
    this.commentsNode.style.display = 'none';
    // this.stopMusic();
    this.game.state.start('Sharing');
    this.music10.stop();
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
    this.musicArr[this.indexMusic].onStop.add(() => {});
    this.musicArr[this.indexMusic].stop();
    this.indexMusic = this.indexMusic === this.musicArr.length - 1 ? 0 : ++this.indexMusic;
    this.startMusic();
  }

  startMusic() {

    this.music10.play();
    // // this.musicArr[this.indexMusic].onPlay.add(this.animateAudioMonitors, this);
    // this.musicArr[this.indexMusic].play();
    // this.musicArr[this.indexMusic].onStop.add(() => this.changeMusic(this.indexMusic, this.musicArr), this);
  }

  changeMusic(indexMusic, musicArr) {
    indexMusic = indexMusic === musicArr.length - 1 ? 0 : ++indexMusic;
    musicArr[indexMusic].play();
    musicArr[indexMusic].onStop.add(() => this.changeMusic(indexMusic, musicArr));
  }

  stopMusic(){
    // this.musicArr[this.indexMusic].onStop.add(() => {});
    // this.musicArr[this.indexMusic].pause();
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
    
    if (!this.lockCamera) {
      if (this.input.x > 0) {
        if (this.input.x < 100) {
          this.camera.x -= 4;
        }
        if (this.input.x > window.innerWidth - 500) {
          this.camera.x += 4;
        }
  
        if (this.input.x < 50) {
          this.camera.x -= 8;
        }
        if (this.input.x > window.innerWidth - 550) {
          this.camera.x += 8;
        }
      }
  
      if (this.input.y > 0) {
        if (this.input.y < 100) {
          this.camera.y -= 4;
        }
        if (this.input.y > window.innerHeight - 100) {
          this.camera.y += 4;
        }
  
        if (this.input.y < 50) {
          this.camera.y -= 8;
        }
        if (this.input.y > window.innerHeight - 50) {
          this.camera.y += 8;
        }
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

  addInterval(element, delay, duration) {
    let interval = setInterval(element=>{
      element.alpha = 1;
      setInterval(element => {
        element.alpha = 0;
      }, delay)
    }, duration);

    return interval;
  }

}
