var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
        progressTxt = this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%',{
             font: '25px', fill: 'white'
        });
        this.progress.anchor.setTo(0.5, 0.5);
        this.game.load.onFileComplete.add(this.fileComplete, this);
  
        loadingTxt = this.add.text(this.game.world.centerX - 37,  this.game.world.centerY - 150, "Loading...", {
            font: '18px', fill: 'lightgrey'
        });
              
        game.load.image('white', 'assets/loom/images/white.png');

        game.load.audiosprite('light_vibes', 'assets/loom/audio/vibes.mp3', null, audioVibes);
        game.load.audiosprite('light_glock', 'assets/loom/audio/glock.mp3', null, audioGlock);
        game.load.audiosprite('light_harp', 'assets/loom/audio/harp.mp3', null, audioHarp);
        game.load.audiosprite('light_pan', 'assets/loom/audio/pan.mp3', null, audioPan);
        game.load.audiosprite('light_pizz', 'assets/loom/audio/pizz.mp3', null, audioPizz);
    },
    
    create: function(){
        this.game.state.start("Light"); 
    }
};

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
};