var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
        game.load.image('blue', 'assets/loom/images/blue.png');
        game.load.image('green', 'assets/loom/images/green.png');
        game.load.image('orange', 'assets/loom/images/orange.png');
        game.load.image('pink', 'assets/loom/images/pink.png');
        game.load.image('purple', 'assets/loom/images/purple.png');
        game.load.image('red', 'assets/loom/images/red.png');
        game.load.image('white', 'assets/loom/images/white.png');
        game.load.image('yellow', 'assets/loom/images/yellow.png');

        game.load.audiosprite('light_vibes', 'assets/loom/audio/light_vibes.ogg', null, audioJSOnL);
    },
    
    create: function(){
        this.game.state.start("Light"); 
    }
};