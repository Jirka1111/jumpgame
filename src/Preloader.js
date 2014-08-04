Jump.Preloader = function(game){
	// define width and height of the game
	Jump.GAME_WIDTH = 640;
	Jump.GAME_HEIGHT = 960;
};
Jump.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#00FFFF';
		this.preloadBar = this.add.sprite((Jump.GAME_WIDTH-311)/2, (Jump.GAME_HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		// load images
		this.load.image('triangle', 'img/triangle.png');
		this.load.image('title', 'img/title.png');
		this.load.image('score-bg', 'img/score-bg.png');
		this.load.image('button-pause', 'img/button-pause.png');
		this.load.image('platform640', 'img/platform640.png');
		this.load.image('platform600', 'img/platform600.png');
		this.load.image('platform550', 'img/platform550.png');
		this.load.image('platform500', 'img/platform500.png');
		this.load.image('platform450', 'img/platform450.png');
		this.load.image('platform400', 'img/platform400.png');
		this.load.image('platform350', 'img/platform350.png');
		this.load.image('platform300', 'img/platform300.png');
		this.load.image('platform250', 'img/platform250.png');
		this.load.image('platform200', 'img/platform200.png');
		this.load.image('platform150', 'img/platform150.png');
		this.load.image('platform100', 'img/platform100.png');
		this.load.image('platform50', 'img/platform50.png');
        // load spritesheets
		this.load.spritesheet('button-start', 'img/button-start.png', 401, 143);
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};