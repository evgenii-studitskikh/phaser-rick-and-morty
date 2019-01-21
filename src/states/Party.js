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

    data.forEach((comment,i) => {
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
    //background
    console.log('---', 'Party');
    console.log('---', this.getSizeBg('../assets/nightclub.jpg'));

    // const sizeBg = this.getSizeBg('../assets/nightclub.jpg');
    // const bgHeight = window.innerWidth * window.devicePixelRatio-425 * sizeBg.ratio;
    // const bgWidth =  window.innerHeight * window.devicePixelRatio * sizeBg.ratio;
    //
    // this.scale.setGameSize(bgWidth, bgHeight);
    this.club = this.add.sprite(
      0,
      0,
      'party-club-bg'
    );

    this.club.resizeFrame(null,  this.game.width-400,
      this.game.height)
  }

}
