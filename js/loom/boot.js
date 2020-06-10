document.addEventListener("deviceready", start, false);
document.addEventListener("pause", onPause, false);
document.addEventListener("resume", onResume, false);

//window.onload = start;

function start(){
    WIDTH = 850; 
    HEIGHT = 1100; 

    game = new Phaser.Game(WIDTH, HEIGHT, Phaser.CANVAS, "container");   
    
    getJson();

    game.state.add("Boot", boot);
    game.state.add("Preloader", preloader);
    game.state.add("Light", lightMain);

    game.state.start("Boot");
}

var boot = function(game){};
  
boot.prototype = {
    create: function(){
        game.stage.backgroundColor = '#000';

        if (this.game.device.desktop){
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            
            this.scale.maxWidth = WIDTH; 
            this.scale.maxHeight = HEIGHT; 
        } 
        
        else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.scale.maxWidth = window.innerWidth * window.devicePixelRatio;
            this.scale.maxHeight = window.innerHeight * window.devicePixelRatio;
            
            this.scale.forceOrientation(true, false);
        }

        game.state.start('Preloader');
    }
};
function getJson(){
	audioGlock = {
	 	spritemap: {
		    1 : { start: 0, end: 5, loop: false },
	        2 : { start: 5, end: 10, loop: false },
	        3 : { start: 10, end: 15, loop: false },
	        4 : { start: 15, end: 20, loop: false },
	    	5 : { start: 20, end: 25, loop: false },
	    	6 : { start: 25, end: 30, loop: false },
	    	7 : { start: 30, end: 35, loop: false },
	    	8 : { start: 35, end: 40, loop: false },
	    	9 : { start: 40, end: 45, loop: false },
	    	10 : { start: 45, end: 50, loop: false },
	    	11 : { start: 50, end: 55, loop: false },
	    	12 : { start: 55, end: 60, loop: false },
	    	13 : { start: 60, end: 65, loop: false },
	    	14 : { start: 65, end: 70, loop: false },
	    	15 : { start: 70, end: 75, loop: false },
	    	16 : { start: 75, end: 80, loop: false },
	    	17 : { start: 80, end: 85, loop: false },
	    	18 : { start: 85, end: 90, loop: false },
	    	19 : { start: 90, end: 95, loop: false },
	    	20 : { start: 95, end: 100, loop: false },
	    	21 : { start: 100, end: 105, loop: false },
	    	22 : { start: 105, end: 110, loop: false },
	    	23 : { start: 110, end: 115, loop: false },
	    	24 : { start: 115, end: 120, loop: false },
	    	25 : { start: 120, end: 125, loop: false }
    	}
	};
	
	audioVibes = {
	 	spritemap: {
		    1 : { start: 0, end: 5, loop: false },
	        2 : { start: 5, end: 10, loop: false },
	        3 : { start: 10, end: 15, loop: false },
	        4 : { start: 15, end: 20, loop: false },
	    	5 : { start: 20, end: 25, loop: false },
	    	6 : { start: 25, end: 30, loop: false },
	    	7 : { start: 30, end: 35, loop: false },
	    	8 : { start: 35, end: 40, loop: false },
	    	9 : { start: 40, end: 45, loop: false },
	    	10 : { start: 45, end: 50, loop: false },
	    	11 : { start: 50, end: 55, loop: false },
	    	12 : { start: 55, end: 60, loop: false },
	    	13 : { start: 60, end: 65, loop: false },
	    	14 : { start: 65, end: 70, loop: false },
	    	15 : { start: 70, end: 75, loop: false },
	    	16 : { start: 75, end: 80, loop: false },
	    	17 : { start: 80, end: 85, loop: false },
	    	18 : { start: 85, end: 90, loop: false },
	    	19 : { start: 90, end: 95, loop: false },
	    	20 : { start: 95, end: 100, loop: false },
	    	21 : { start: 100, end: 105, loop: false },
	    	22 : { start: 105, end: 110, loop: false },
	    	23 : { start: 110, end: 115, loop: false },
	    	24 : { start: 115, end: 120, loop: false },
	    	25 : { start: 120, end: 125, loop: false }
    	}
	};
	
	audioHarp = {
	 	spritemap: {
		    1 : { start: 0, end: 5, loop: false },
	        2 : { start: 5, end: 10, loop: false },
	        3 : { start: 10, end: 15, loop: false },
	        4 : { start: 15, end: 20, loop: false },
	    	5 : { start: 20, end: 25, loop: false },
	    	6 : { start: 25, end: 30, loop: false },
	    	7 : { start: 30, end: 35, loop: false },
	    	8 : { start: 35, end: 40, loop: false },
	    	9 : { start: 40, end: 45, loop: false },
	    	10 : { start: 45, end: 50, loop: false },
	    	11 : { start: 50, end: 55, loop: false },
	    	12 : { start: 55, end: 60, loop: false },
	    	13 : { start: 60, end: 65, loop: false },
	    	14 : { start: 65, end: 70, loop: false },
	    	15 : { start: 70, end: 75, loop: false },
	    	16 : { start: 75, end: 80, loop: false },
	    	17 : { start: 80, end: 85, loop: false },
	    	18 : { start: 85, end: 90, loop: false },
	    	19 : { start: 90, end: 95, loop: false },
	    	20 : { start: 95, end: 100, loop: false },
	    	21 : { start: 100, end: 105, loop: false },
	    	22 : { start: 105, end: 110, loop: false },
	    	23 : { start: 110, end: 115, loop: false },
	    	24 : { start: 115, end: 120, loop: false },
	    	25 : { start: 120, end: 125, loop: false }
    	}
	};
	
	audioPizz = {
	 	spritemap: {
		    1 : { start: 0, end: 5, loop: false },
	        2 : { start: 5, end: 10, loop: false },
	        3 : { start: 10, end: 15, loop: false },
	        4 : { start: 15, end: 20, loop: false },
	    	5 : { start: 20, end: 25, loop: false },
	    	6 : { start: 25, end: 30, loop: false },
	    	7 : { start: 30, end: 35, loop: false },
	    	8 : { start: 35, end: 40, loop: false },
	    	9 : { start: 40, end: 45, loop: false },
	    	10 : { start: 45, end: 50, loop: false },
	    	11 : { start: 50, end: 55, loop: false },
	    	12 : { start: 55, end: 60, loop: false },
	    	13 : { start: 60, end: 65, loop: false },
	    	14 : { start: 65, end: 70, loop: false },
	    	15 : { start: 70, end: 75, loop: false },
	    	16 : { start: 75, end: 80, loop: false },
	    	17 : { start: 80, end: 85, loop: false },
	    	18 : { start: 85, end: 90, loop: false },
	    	19 : { start: 90, end: 95, loop: false },
	    	20 : { start: 95, end: 100, loop: false },
	    	21 : { start: 100, end: 105, loop: false },
	    	22 : { start: 105, end: 110, loop: false },
	    	23 : { start: 110, end: 115, loop: false },
	    	24 : { start: 115, end: 120, loop: false },
	    	25 : { start: 120, end: 125, loop: false }
    	}
	};
	
	audioPan = {
	 	spritemap: {
		    1 : { start: 0, end: 5, loop: false },
	        2 : { start: 5, end: 10, loop: false },
	        3 : { start: 10, end: 15, loop: false },
	        4 : { start: 15, end: 20, loop: false },
	    	5 : { start: 20, end: 25, loop: false },
	    	6 : { start: 25, end: 30, loop: false },
	    	7 : { start: 30, end: 35, loop: false },
	    	8 : { start: 35, end: 40, loop: false },
	    	9 : { start: 40, end: 45, loop: false },
	    	10 : { start: 45, end: 50, loop: false },
	    	11 : { start: 50, end: 55, loop: false },
	    	12 : { start: 55, end: 60, loop: false },
	    	13 : { start: 60, end: 65, loop: false },
	    	14 : { start: 65, end: 70, loop: false },
	    	15 : { start: 70, end: 75, loop: false },
	    	16 : { start: 75, end: 80, loop: false },
	    	17 : { start: 80, end: 85, loop: false },
	    	18 : { start: 85, end: 90, loop: false },
	    	19 : { start: 90, end: 95, loop: false },
	    	20 : { start: 95, end: 100, loop: false },
	    	21 : { start: 100, end: 105, loop: false },
	    	22 : { start: 105, end: 110, loop: false },
	    	23 : { start: 110, end: 115, loop: false },
	    	24 : { start: 115, end: 120, loop: false },
	    	25 : { start: 120, end: 125, loop: false }
    	}
	};
}

function onPause(){
    game.paused = true;
}

function onResume(){
    game.paused = false;
    setTimeout(function(){
        try{
            StatusBar.hide();
        }catch(e){}   
    }, 1000);
}