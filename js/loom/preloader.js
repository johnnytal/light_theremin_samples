var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
        game.load.image('white', 'assets/loom/images/white.png');

        game.load.audiosprite('light_vibes', 'assets/loom/audio/light_vibes.ogg', null, audioJSOnL);
    },
    
    create: function(){
        this.game.state.start("Light"); 
    }
};