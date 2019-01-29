class Boot extends Phaser.State {

	preload() {
		this.game.load.image('preload-portal', 'assets/preload_portal.png');
    this.game.load.image('preload-portal-gradient', 'assets/preload_portal_gradient.svg');
	}

	create() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.game.state.start('Preload');
	}
}

export default Boot;