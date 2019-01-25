export default class Preload extends Phaser.State {

	preload() {

    //preloading screen sprites
    this.preloadPortal = this.game.add.sprite(
      this.world.centerX,
      this.world.centerY,
      'preload-portal'
    );
    this.preloadPortal.anchor.setTo(0.5);

    this.preloadPortalGradient = this.game.add.sprite(
      this.world.centerX,
      this.world.centerY,
      'preload-portal-gradient'
    );
    this.preloadPortalGradient.anchor.setTo(0.5);

    //preloading for all game resources
    this.game.load.image('space', 'assets/space.png');
    this.game.load.image('portal', 'assets/portal.svg');
    this.game.load.image('portal-text', 'assets/intro_text.svg');
    this.game.load.image('portal-button', 'assets/intro_button.svg');
    this.game.load.image('cutscene-char', 'assets/cutscene_char.svg');
    this.game.load.image('cutscene-dialog', 'assets/cutscene_dialog.svg');
    this.game.load.image('cutscene-arrow-next', 'assets/cutscene_button_next.svg');
    this.game.load.image('cutscene-arrow-prev', 'assets/cutscene_button_prev.svg');
    this.game.load.image('cutscene-planet', 'assets/cutscene_planet.svg');
    this.game.load.image('cutscene-accept-button', 'assets/cutscene_accept_button.svg');
    this.game.load.image('enterenece-constructor-bg', 'assets/enterence_constructor_bg.svg');
    this.game.load.image('party-club-bg', 'assets/club_bg.svg');
    this.game.load.spritesheet('audio-monitor-sprite', 'assets/audio_monitor_sprite.svg', 134, 286, 5);
    this.game.load.image('audio-monitor', 'assets/audio_monitor.svg');
    this.game.load.image('backdrop', 'assets/backdrop.png');
    this.game.load.image('planet-enterence', 'assets/planet_enterence.png');
    this.game.load.image('planet-photo1', 'assets/projector_photo_1.png');
    this.game.load.image('planet-photo2', 'assets/projector_photo_2.png');
    this.game.load.image('planet-photo3', 'assets/projector_photo_3.png');
    this.game.load.image('planet-photo4', 'assets/projector_photo_4.png');
    this.game.load.image('planet-photo5', 'assets/projector_photo_5.png');
    this.game.load.image('planet-photo6', 'assets/projector_photo_6.png');
    this.game.load.image('change-photo-button', 'assets/change_photo_btn.png');

    this.game.load.image('constructor-arrow-left', 'assets/constructor_arrow_left.svg');
    this.game.load.image('constructor-arrow-right', 'assets/constructor_arrow_right.svg');
    this.game.load.image('constructor-select-head', 'assets/constructor_select_head.svg');
    this.game.load.image('constructor-select-body', 'assets/constructor_select_body.svg');
    this.game.load.image('constructor-select-arms_left', 'assets/constructor_select_arms.svg');
    this.game.load.image('constructor-select-arms_right', 'assets/constructor_select_arms.svg');
    this.game.load.image('constructor-select-legs', 'assets/constructor_select_legs.svg');
    this.game.load.image('constructor-select-random', 'assets/constructor_select_random.svg');
    this.game.load.image('constructor-apply', 'assets/constructor_apply.svg');
    this.game.load.image('constructor-yellow-head', 'assets/constructor_yellow_head.svg');
    this.game.load.image('constructor-name-label', 'assets/constructor_name_label.svg');
    this.game.load.image('constructor-wish-label', 'assets/constructor_wish_label.svg');
    this.game.load.image('constructor-tube', 'assets/constructor_tube.svg');
    this.game.load.image('constructor-to-constructor', 'assets/constructor_to_constructor.svg');
    this.game.load.image('constructor-to-club', 'assets/constructor_to_club.svg');

    this.game.load.image('space-lemon', 'assets/space/lemon.svg');
    this.game.load.image('space-blue-ball', 'assets/space/blue_ball.svg');
    this.game.load.image('space-grey-ball', 'assets/space/grey_ball.svg');

    //constructor heads
    this.game.load.image('head1', 'assets/constructor/head_1.svg');
    this.game.load.image('head2', 'assets/constructor/head_2.svg');
    this.game.load.image('head3', 'assets/constructor/head_3.svg');
    this.game.load.image('head4', 'assets/constructor/head_4.svg');
    this.game.load.image('head5', 'assets/constructor/head_5.svg');
    this.game.load.image('head6', 'assets/constructor/head_6.svg');
    this.game.load.image('head7', 'assets/constructor/head_7.svg');
    this.game.load.image('head8', 'assets/constructor/head_8.svg');
    this.game.load.image('head9', 'assets/constructor/head_9.svg');
    this.game.load.image('head10', 'assets/constructor/head_10.svg');
    this.game.load.image('head11', 'assets/constructor/head_11.svg');
    this.game.load.image('head12', 'assets/constructor/head_12.svg');
    this.game.load.image('head13', 'assets/constructor/head_13.svg');

    //constructor body
    this.game.load.image('body1', 'assets/constructor/body_1.svg');
    this.game.load.image('body2', 'assets/constructor/body_2.svg');
    this.game.load.image('body3', 'assets/constructor/body_3.svg');
    this.game.load.image('body4', 'assets/constructor/body_4.svg');
    this.game.load.image('body5', 'assets/constructor/body_5.svg');
    this.game.load.image('body6', 'assets/constructor/body_6.svg');
    this.game.load.image('body7', 'assets/constructor/body_7.svg');
    this.game.load.image('body8', 'assets/constructor/body_8.svg');
    this.game.load.image('body9', 'assets/constructor/body_9.svg');
    this.game.load.image('body10', 'assets/constructor/body_10.svg');

    //constructor legs
    this.game.load.image('legs1', 'assets/constructor/legs_1.svg');
    this.game.load.image('legs2', 'assets/constructor/legs_2.svg');
    this.game.load.image('legs3', 'assets/constructor/legs_3.svg');
    this.game.load.image('legs4', 'assets/constructor/legs_4.svg');
    this.game.load.image('legs5', 'assets/constructor/legs_5.svg');
    this.game.load.image('legs6', 'assets/constructor/legs_6.svg');
    this.game.load.image('legs7', 'assets/constructor/legs_7.svg');
    this.game.load.image('legs8', 'assets/constructor/legs_8.svg');
    this.game.load.image('legs9', 'assets/constructor/legs_9.svg');
    this.game.load.image('legs10', 'assets/constructor/legs_10.svg');

    //constructor arms
    this.game.load.image('arms_left1', 'assets/constructor/arms_left_1.svg');
    this.game.load.image('arms_left2', 'assets/constructor/arms_left_2.svg');
    this.game.load.image('arms_left3', 'assets/constructor/arms_left_3.svg');
    this.game.load.image('arms_left4', 'assets/constructor/arms_left_4.svg');
    this.game.load.image('arms_left5', 'assets/constructor/arms_left_5.svg');
    this.game.load.image('arms_left6', 'assets/constructor/arms_left_6.svg');
    this.game.load.image('arms_left7', 'assets/constructor/arms_left_7.svg');
    this.game.load.image('arms_left8', 'assets/constructor/arms_left_8.svg');
    this.game.load.image('arms_left9', 'assets/constructor/arms_left_9.svg');
    this.game.load.image('arms_left10', 'assets/constructor/arms_left_10.svg');

    this.game.load.image('arms_right1', 'assets/constructor/arms_right_1.svg');
    this.game.load.image('arms_right2', 'assets/constructor/arms_right_2.svg');
    this.game.load.image('arms_right3', 'assets/constructor/arms_right_3.svg');
    this.game.load.image('arms_right4', 'assets/constructor/arms_right_4.svg');
    this.game.load.image('arms_right5', 'assets/constructor/arms_right_5.svg');
    this.game.load.image('arms_right6', 'assets/constructor/arms_right_6.svg');
    this.game.load.image('arms_right7', 'assets/constructor/arms_right_7.svg');
    this.game.load.image('arms_right8', 'assets/constructor/arms_right_8.svg');
    this.game.load.image('arms_right9', 'assets/constructor/arms_right_9.svg');
    this.game.load.image('arms_right10', 'assets/constructor/arms_right_10.svg');
    

    //partyMusic:
    this.load.audio('1track',['music/1.Too_short_Shake_That_Monkey.ogg', 'music/1.Too_short_Shake_That_Monkey.mp3']);
    this.load.audio('2track',['music/2.Tony_toni_tone_Feels_good.ogg', 'music/2.Tony_toni_tone_Feels_good.mp3']);
    this.load.audio('3track',['music/3.Summer_and_Tinkles.ogg', 'music/3.Summer_and_Tinkles.mp3']);
    this.load.audio('4track',['music/4.Splack_Pack_Shake_That_Ass_Bitch.ogg', 'music/4.Splack_Pack_Shake_That_Ass_Bitch.mp3']);
    this.load.audio('5track',['music/5.Ryan_Elder_Head_Bent_Over.ogg', 'music/5.Ryan_Elder_Head_Bent_Over.mp3']);
    this.load.audio('6track',['music/6.Ryan_Elder_Enigma_Parody_Song.ogg', 'music/6.Ryan_Elder_Enigma_Parody_Song.mp3']);
    this.load.audio('7track',['music/7.Ryan_Elder_African_Dream_Pop.ogg', 'music/7.Ryan_Elder_African_Dream_Pop.mp3']);
    this.load.audio('8track',['music/8.Rik_i_Morti_Get_Schwifty_(Andromulus_Remix).ogg', 'music/8.Rik_i_Morti_Get_Schwifty_(Andromulus_Remix).mp3']);
    this.load.audio('9track',['music/9.Justin_Roiland_Ryan_Elder-Raised_Up.ogg', 'music/9.Justin_Roiland_Ryan_Elder-Raised_Up.mp3']);
    this.load.audio('10track',['music/10.Let_Me_Out.ogg', 'music/10.Let_Me_Out.mp3']);
    this.load.audio('11track',['music/11.Help_Me_Im_Gonna_Die.ogg', 'music/11.Help_Me_Im_Gonna_Die.mp3']);
    this.load.audio('12track',['music/12.The_Rick_Dance.ogg', 'music/12.The_Rick_Dance.mp3']);
    this.load.audio('13track',['music/13.Alien_Jazz_Rap.ogg', 'music/13.Alien_Jazz_Rap.mp3']);
    this.load.audio('all-tracks',['music/all-tracks.ogg', 'music/all-tracks.mp3']);

    //audio
    this.load.audio('click', [
      'sounds/click.mp3'
    ]);

    this.load.audio('enter', [
      'sounds/enter.mp3'
    ]);
  }

  create() {

		this.game.state.start('Party');

	}
}