//window.onload = start;
document.addEventListener("deviceready", start, false);

function start(){
    WIDTH = 1332; 
    HEIGHT = 738; 

    game = new Phaser.Game(WIDTH, HEIGHT, Phaser.CANVAS, "container");   
    
    audioJSOnL = {
	 	spritemap: {
	        1 : { start: 0, end: 8, loop: false },
	        2 : { start: 8, end: 16, loop: false },
	        3 : { start: 16, end: 24, loop: false },
	        4 : { start: 24, end: 32, loop: false },
	    	5 : { start: 32, end: 40, loop: false },
	    	6 : { start: 40, end: 48, loop: false },
	    	7 : { start: 48, end: 56, loop: false },
	    	8 : { start: 56, end: 64, loop: false },
	    	9 : { start: 64, end: 72, loop: false },
	    	10 : { start: 72, end: 80, loop: false },
	    	11 : { start: 80, end: 88, loop: false },
	    	12 : { start: 88, end: 96, loop: false },
	    	13 : { start: 96, end: 104, loop: false },
	    	14 : { start: 104, end: 112, loop: false },
	    	15 : { start: 112, end: 120, loop: false },
	    	16 : { start: 120, end: 128, loop: false }
    	}
	};

    game.state.add("Boot", boot);
    game.state.add("Preloader", preloader);
    game.state.add("Light", lightMain);

    game.state.start("Boot");
}

var boot = function(game){};
  
boot.prototype = {
    create: function(){
    	game.stage.backgroundColor = '#000000';
    	
        game.state.start("Preloader"); 
    }
};