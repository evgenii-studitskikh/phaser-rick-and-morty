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
    this.commentsBar(this.dataComment);

    this.moving = 0;
    const bgImgWidth = 1920;
    const bgImgHeight = 1080;
    const widthCommentsList = 400;
    const bgWidth = window.innerWidth * window.devicePixelRatio;
    const bgHeight = window.innerHeight * window.devicePixelRatio;

    this.scale.setGameSize(bgWidth,bgHeight);
    this.camera.setSize(bgWidth-widthCommentsList, bgHeight);
    this.camera.setPosition(widthCommentsList/2,0);

    this.world.setBounds(0, 0, bgImgWidth, bgImgHeight);
    this.clubBg = this.add.sprite(0, 0, 'party-club-bg');

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.enable(this.clubBg);
    this.clubBg.body.fixedRotation = true;

    this.cursors = this.input.keyboard.createCursorKeys();

    this.music = this.add.audio('TheFluHatinRap');
    this.sound.setDecodedCallback([ this.music ], this.start, this);

    this.input.onDown.add(this.toggle, this);
    this.input.onDown.add(this.changeVolume, this);
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

  start() {
    this.music.play();
    this.music.loopFull();
  }

  changeVolume(pointer) {
    if (pointer.y < 300)
    {
      this.music.pause();
    }
    else
    {
      this.music.resume();
    }
  }

}
