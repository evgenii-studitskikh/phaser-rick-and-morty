export default class Party extends Phaser.State {
  constructor() {
    super();
    this.dataComment = [
      {
        name: 'Игорь Николаев',
        date: '14.01.2019',
        comment: 'Выпьем за любовь!'
      },

      {
        name: 'Померанец',
        date: '14.01.2019',
        comment: 'Желаю побольше в жизни позитива, верных решений, верных друзей и правильных жизненных поворотов!'
      },

      {
        name: 'Нико',
        date: '14.01.2019',
        comment: 'Добра, тепла и пониманья,\n' +
        'Здоровья, радости, признанья,\n' +
        'Успехов, счастья и везенья\n' +
        'Тебе желаю в день рождень...'
      },

      {
        name: 'Пони express',
        date: '14.01.2019',
        comment: 'Счастья удачи здоровья веселья доброго сердца'
      },

      {
        name: 'Зинаида',
        date: '14.01.2019',
        comment: 'Желаю побольше в жизни позитива, верных решений, верных друзей и правильных жизненных поворотов!'
      },

      {
        name: 'Холодный',
        date: '14.01.2019',
        comment: 'Добра, тепла и пониманья,\n' +
        'Здоровья, радости, признанья,\n' +
        'Успехов, счастья и везенья\n' +
        'Тебе желаю в день рожденья.'
      },

      {
        name: 'кроненберг',
        date: '14.01.2019',
        comment: 'Счастья удачи здоровья веселья доброго сердца'
      }
    ];
  }

  init() {

  }

  commentsBar(data = [{name: 'Данные не загруженны', date: 'Данные не загруженны', comment: 'Данные не загруженны'}]) {

    let comments = document.createElement('section');
    comments.classList.add('comments');

    const htmlTemplate =
      `
      <h2 class="comments__title">Поздравления</h2>
      <div class="comments__list-inner">
        <ul class="comments__list">
          
        </ul>
      </div>
      `;

    document.body.appendChild(comments);
    comments.innerHTML = htmlTemplate;
    const list = document.querySelector('.comments__list');

    data.forEach((comment, i) => {
      //Дабвляем li в .comments__list:
      const item = document.createElement('li');
      item.classList.add('comments__item');
      item.innerHTML =
        `
          <div class="comments__header">
            <div class="comments__user">${comment.name}</div>
            <div class="comments__date">${comment.date}</div>
          </div>
          <div class="comments__message">
            ${comment.comment}
          </div>
        `;
      list.appendChild(item);
    });
  };

  getSizeBg(imageSrc) {
    const img = new Image();
    img.src = imageSrc;
    const imgRatio = img.width / img.height;
    return {width: img.width, height: img.height, ratio: imgRatio};
  }

  create() {
    //генерим комменты
    this.commentsBar(this.dataComment);

    this.moving = 0;
    const bgImgWidth = 2649;
    const bgImgHeight = 1632;
    const widthCommentsList = 400;

    //устанавливаем размеры игрового мира:
    this.world.setBounds(0, 0, bgImgWidth, bgImgHeight);

    //задаем размеры и позицию камеры:
    this.camera.setSize(window.innerWidth - widthCommentsList, window.innerHeight);
    this.camera.setPosition((bgImgWidth - window.innerWidth + widthCommentsList)/2 , (bgImgHeight - window.innerHeight)/2);

    //дабавляем спрайт фона:
    this.clubBg = this.add.sprite(0, 0, 'party-club-bg');

    //добавляем обработку событий мыши:
    this.cursors = this.input.keyboard.createCursorKeys();

    // v.2
    // this.music = this.add.audio('all-tracks');
    // this.music.addMarker('1track', 0, 46.5);
    // this.music.addMarker('2track', 46.5, 50);
    // this.music.addMarker('3track', 97, 90);
    // this.music.addMarker('4track', 187, 33);
    // this.music.addMarker('5track', 221, 57);
    // console.log('---', this.music.markers);
    // this.currentMarker = '1track';
    // this.sound.setDecodedCallback(this.music, this.startMusic, this);

    //подключаем фоновую музыку:
    this.music1 = this.add.audio('1track');
    // this.music1.addMarker('1', 0, 279);
    this.music2 = this.add.audio('2track');
    // this.music2.addMarker('2', 0, 298);
    this.music3 = this.add.audio('3track');
    // this.music3.addMarker('3', 0, 52);
    this.music4 = this.add.audio('4track');
    // this.music4.addMarker('4', 0, 236);
    this.music5 = this.add.audio('5track');
    this.music6 = this.add.audio('6track');
    this.music7 = this.add.audio('7track');
    this.music8 = this.add.audio('8track');
    this.music9 = this.add.audio('9track');
    this.music10 = this.add.audio('10track');
    this.music11 = this.add.audio('11track');
    this.music12 = this.add.audio('12track');
    this.music13 = this.add.audio('13track');
    this.musicArr = [ this.music1,this.music2,this.music3,this.music4,this.music5,this.music6,this.music7,this.music8,this.music9,this.music10,this.music11,this.music12,this.music13 ];
    this.indexMusic = 5;
    this.sound.setDecodedCallback( this.musicArr, this.startMusic, this);
    // this.sound.autoplay = true;

    this.input.onDown.add(this.toggle, this);
    // this.input.onDown.add(this.changeVolume, this);
    // this.input.onDown.add(this.changeMusic, this);
  }


  startMusic() {
    this.musicArr[this.indexMusic].play();
    this.musicArr[this.indexMusic].onStop = this.changeMusic;

    // this.musicArr[this.indexMusic].onMarkerComplete =  this.changeMusic();
    // this.music.loopFull();
    // this.music.loopFull();
  }

  changeMusic() {
    console.log('---onStop' );
    // this.indexMusic = this.indexMusic === this.musicArr.length - 1 ? 0 : ++this.indexMusic;
    // this.musicArr[this.indexMusic].play();
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
    if (pointer.y < 300)
    {
      this.musicArr[this.indexMusic].pause();
    }
    else
    {
      this.musicArr[this.indexMusic].resume();
    }
  }



}
