var lightMain = function(game){
	noteNLight = 1;
	oldNoteLight = -1;
	
	keys = ['blue', 'green', 'orange', 'pink', 'purple', 'red', 'white', 'yellow'];
};

lightMain.prototype = {
    create: function(){
    	loadLightSounds();
    	
    	game.stage.backgroundColor = '#f7f7f7';
    
        distaff = this.add.sprite(0, 0, keys[3]);
        distaff.x = game.world.centerX - distaff.width / 2;
        distaff.y = game.world.centerY - distaff.height / 2;
        distaff.alpha = 0;
	
        try{
        	window.plugins.insomnia.keepAwake();
    	} catch(e){}
    
        try{
            StatusBar.hide();
        } catch(e){}   

		getLightReading();
    }
};

function getLightReading(){
    timer = setInterval(function(){
        window.plugin.lightsensor.getReading(function success(reading){
            readLight(reading);
        });
    }, 60);
}

function readLight(reading){
    luminosity = parseInt(reading.intensity);

    noteNLight = Math.round( ( (luminosity * 1.25) + 300) / 300 );
    if (noteNLight > 16) noteNLight = 16;
    else if (noteNLight < 1) noteNLight = 1;
	
	if (noteNLight != oldNoteLight){
		try{
			fxVibes.play(noteNLight);
		}catch(e){}
		
		try{
			anims[noteNLight - 1].play(10, false);
		}catch(e){}		
	}
	
	oldNoteLight = noteNLight;
	
	try{
    	distaff.loadTexture(keys[noteNLight / 2 - 1], 0);
    } catch(e){}
    
	tween = game.add.tween(distaff).to( { alpha: 1 }, 1500, "Linear", true);
	tween.onComplete.add(onComplete, function(){
		game.add.tween(distaff).to( { alpha: 0}, 1500, "Linear", true);
	});
}

function loadLightSounds(){
	fxVibes = game.add.audioSprite('light_vibes');
    fxVibes.allowMultiple = true;
}