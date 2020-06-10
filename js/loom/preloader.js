var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
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