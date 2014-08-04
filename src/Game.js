Jump.Game = function(game){
	// define needed variables for Candy.Game
	this._player = null;
	this._rectangleGroup = null;
	this._spawnRectangleTimer = 0;
    this._ground = null;
	this._fontStyle = null;
    this.cursors = null;
    this.xPoint = new Phaser.Point(Jump.GAME_WIDTH/2);
	// define Candy variables to reuse them in Candy.item functions
	Jump._scoreText = null;
	Jump._score = 0;
};
Jump.Game.prototype = {
	create: function(){

        this.physics.startSystem(Phaser.Physics.ARCADE);


        this.cursors = this.input.keyboard.createCursorKeys();

        this._ground = this.add.sprite(0, Jump.GAME_HEIGHT-20, "platform640");
        this.physics.enable(this._ground, Phaser.Physics.ARCADE);
        this._ground.body.immovable = true;

        this._player = this.add.sprite(Jump.GAME_WIDTH/2, Jump.GAME_HEIGHT-200, "triangle", "fixedToCamera");
        this.physics.arcade.enable(this._player);
        this._player.body.gravity.y = 300;
        //koliduje s okraji displeje
        this._player.body.collideWorldBounds = true;
        this._player.body.immovable = false;

        this.image = this.add.sprite(0,Jump.GAME_HEIGHT-25,"platform50");
        this.physics.enable(this.image, Phaser.Physics.ARCADE);
        this.image.anchor.setTo(0.5, 0.5);
        this.image.body.velocity.x = this.rnd.integerInRange(100, 500);
        this.image.body.checkCollision.up = true;


        this.image2 = this.add.sprite(0,Jump.GAME_HEIGHT-50,"platform500");
        this.physics.enable(this.image2, Phaser.Physics.ARCADE);
        this.image2.body.velocity.x = this.rnd.integerInRange(100, 500);
        this.image2.body.collideWorldBounds = true;
        this.image2.body.bounce.setTo(1, 1);
        this.image2.body.checkCollision.up = true;
        this.image2.body.immovable = true;


	},
	managePause: function(){
		// pause the game
		this.game.paused = true;
		// add proper informational text
		var pausedText = this.add.text(100, 250, "Game paused.\nTap anywhere to continue.", this._fontStyle);
		// set event listener for the user's click/tap the screen
		this.input.onDown.add(function(){
			// remove the pause text
			pausedText.destroy();
			// unpause the game
			this.game.paused = false;
		}, this);
	},
	update: function(){
        if(this.image.x = Jump.GAME_WIDTH/2){
            this.image.body.velocity.x = 0;
        }

        this._player.body.velocity.x=0;
        if(this.cursors.up.isDown || this._player.body.touching.image2){
            this._player.body.velocity.y = -350;
        }

        this.physics.arcade.collide(this._player, this.image2);

	},

    spawnRectangle: function(){
//        var rectangleYPosition =
    }
};
