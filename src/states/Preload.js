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

    this.LoadingText = this.add.text(
      this.world.centerX,
			this.world.centerY + 5,
      'Загрузка...', 
      { 
        font: 'Lasco', 
        fontSize: 16, 
        fill: '#FFFFFF',
        align: 'center'
      }
    );
		this.LoadingText.anchor.setTo(0.5);

    //preloading for all game resources
    this.game.load.image('space', 'assets/space.png');
    this.game.load.image('portal', 'assets/portal.svg');
    this.game.load.image('portal-text', 'assets/intro_text.svg');
    this.game.load.image('portal-button', 'assets/intro_button.svg');

    this.game.load.image('space-lemon', 'assets/space/lemon.svg');
    this.game.load.image('space-blue-ball', 'assets/space/blue_ball.svg');
    this.game.load.image('space-grey-ball', 'assets/space/grey_ball.svg');

    this.load.audio('enter', [
      'sounds/enter.mp3'
    ]);
    
    this.game.load.image('cutscene-char', 'assets/cutscene_char.svg');
    this.game.load.image('cutscene-dialog', 'assets/cutscene_dialog.svg');
    this.game.load.image('cutscene-arrow-next', 'assets/cutscene_button_next.svg');
    this.game.load.image('cutscene-arrow-prev', 'assets/cutscene_button_prev.svg');
    this.game.load.image('cutscene-planet', 'assets/cutscene_planet.svg');
    this.game.load.image('cutscene-accept-button', 'assets/cutscene_accept_button.svg');

    this.load.audio('13track',['music/13.Alien_Jazz_Rap.ogg', 'music/13.Alien_Jazz_Rap.mp3']);

    //sharing
    this.load.image('bg-sharing-ground', 'assets/bg_sharing_ground.svg');
    this.load.image('bg-sharing-ground2', 'assets/bg_sharing_ground2.svg');
    this.load.image('office-house', 'assets/office_house.svg');
    this.load.image('logo-picom', 'assets/logo_picom.svg');
    this.load.image('btn-back-party', 'assets/button_back_party.svg');
    this.load.image('btn-create-person', 'assets/button_create_person.svg');
    this.load.image('facebook', 'assets/socials_facebook.svg');
    this.load.image('vk', 'assets/socials_vk.svg');
    this.load.image('twitter', 'assets/socials_twitter.svg');
    this.load.image('ok', 'assets/socials_ok.svg');
    this.load.image('bottle', 'assets/bottle.svg');

    //party:
    this.game.load.image('party-club-bg', 'assets/club_bg.svg');
    this.game.load.spritesheet('audio-monitor-sprite', 'assets/audio_monitor_sprite.svg', 134, 286, 5);
    this.game.load.image('audio-monitor', 'assets/audio_monitor.svg');
    this.game.load.image('planet-photo1', 'assets/projector_photo_1.png');
    this.game.load.image('planet-photo2', 'assets/projector_photo_2.png');
    this.game.load.image('planet-photo3', 'assets/projector_photo_3.png');
    this.game.load.image('planet-photo4', 'assets/projector_photo_4.png');
    this.game.load.image('planet-photo5', 'assets/projector_photo_5.png');
    this.game.load.image('planet-photo6', 'assets/projector_photo_6.png');
    this.game.load.image('change-photo-button', 'assets/change_photo_btn.png');
    this.game.load.spritesheet('portal-sprite-party', 'assets/portal_sprite_party.svg', 189, 290, 15);
    this.game.load.image('portal-party', 'assets/portal_party.svg');
    this.game.load.image('party-help-bg', 'assets/help_bg_party.svg');
    this.game.load.image('close-btn', 'assets/close_btn.svg');

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
    this.load.audio('rickportal-sound',['sounds/rickportal.ogg', 'sounds/rickportal.mp3']);
    this.load.audio('rickportal-sound-reverse',['sounds/rickportal-reverse.ogg', 'sounds/rickportal-reverse.mp3']);

  }

  create() {
		this.game.state.start('Party');
	}
}