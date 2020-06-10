var lightMain = function(game){
	note = 9;
	last_frequency = -100;

	colors = [
		'FF0EF0','FF0EF0','FF0CF0','FF0BF0','FF0AF0','FF09F0','FF08F0','FF07F0','FF06F0','FF05F0','FF04F0',
		'FF03F0','FF02F0','FF01F0','FF00F0','FF00E0','FF00D0','FF00C0','FF00B0','FF00A0','FF0090','FF0080',
		'FF0070','FF0060','FF0050','FF0040','FF0030','FF0020','FF0010','FF0000','FF0a00','FF1400','FF1e00',
		'FF2800','FF3200','FF3c00','FF4600','FF5000','FF5a00','FF6400','FF6e00','FF7800','FF8200','FF8c00',
		'FF9600','FFa000','FFaa00','FFb400','FFbe00','FFc800','FFd200','FFdc00','FFe600','FFf000','FFfa00',
		'fdff00','d7ff00','b0ff00','8aff00','65ff00','3eff00','17ff00','00ff10','00ff36','00ff5c','00ff83',
		'00ffa8','00ffd0','00fff4','00e4ff','00d4ff','00c4ff','00b4ff','00a4ff','0094ff','0084ff','0074ff',
		'0064ff','0054ff','0044ff','0032ff','0022ff','0012ff','0002ff','0000ff','0100ff','0200ff','0300ff',
	];
	
	config = {
		SENSITIVITY: 100,
		FACTOR: 4,
		SOUND: 0,
		SCALE: 0,
	};
	
	chromatic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
	major = [1, 3, 5, 6, 8, 10, 12, 13, 15, 17, 18, 20, 22, 24, 25];
	minor = [1, 3, 4, 6, 8, 9, 11, 13, 15, 16, 18, 20, 21, 23, 25];
	pentatonic = [1, 3, 6, 8, 10, 13, 15, 18, 20, 22, 25];
	blues = [1, 4, 6, 7, 8, 11, 13, 16, 18, 19, 20, 23, 25];	
	
	scales = [chromatic, major, minor, pentatonic, blues];
};

lightMain.prototype = {
    create: function(){
		loadSounds();
		
		playingScale = scales[config.SCALE];
		
    	debugText = game.add.text(0, 0, '0', {font: '36px', fill: 'white'});
    	debugText.x = game.world.centerX - debugText.width / 2;
    	debugText.y = game.world.centerY - debugText.height / 2;
    	
    	lightSprite = game.add.sprite(0, 0, 'white');
    	lightSprite.anchor.set(.5, .5);
    	lightSprite.x = game.world.centerX;
    	lightSprite.y = game.world.centerY;

        try{
        	window.plugins.insomnia.keepAwake();
    	} catch(e){}
        try{
            StatusBar.hide();
        } catch(e){}   
		
		startGUI();

		getLightReading();
    }
};

function getLightReading(){
    timer = setInterval(function(){
        window.plugin.lightsensor.getReading(function success(reading){
            readLight(reading);
        });
    }, 50);
}

function readLight(reading){
    luminosity = parseInt(reading.intensity);
    
    frequency_check = luminosity * config.FACTOR;
    
    debugText.text = Math.round(frequency_check);

    if (Math.abs(frequency_check - last_frequency) > config.SENSITIVITY){	
        if (frequency_check < last_frequency){
            note--; 
            if (note < 1) note = 1;
        }
        else if (frequency_check > last_frequency){
            note++;
            if (note > playingScale.length) note = playingScale.length;
        }
		
		try{
			sounds[config.SOUND].play(playingScale[note]);
		}catch(e){}	 
		    
	    var place = Math.round(frequency_check / 75);
	    if (place > colors.length - 1) place = colors.length - 1;
	    game.stage.backgroundColor = '#' + colors[place];
	    
	    lightSprite.scale.set(place / 20, place / 20);
    }
    
    last_frequency = frequency_check;
}

function startGUI(){
    var gui = new dat.GUI({ width: 300 });
    gui.add(config, 'SENSITIVITY', 0, 600).name('Sensitivity').step(5);
    gui.add(config, 'FACTOR', 0.1, 10).name('Darkness level');
    gui.add(config, 'SOUND', { 'Vibraphone': 0, 'Glockenspiel': 1, 'Harp': 2, 'Kalimba': 3 , 'Pizzicato' : 4 }).name('Instrument');
    gui.add(config, 'SCALE', { 'Chromatic' : 0, 'Major': 1, 'Minor': 2, 'Pentatonic': 3, 'Blues': 4}).name('Scale');
    
    if (isMobile()) gui.close();
}

function isMobile () {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function loadSounds(){
	fxVibes = game.add.audioSprite('light_vibes');
	fxVibes.allowMultiple = true;
	
	fxGlock = game.add.audioSprite('light_glock');
	fxGlock.allowMultiple = true;
	
	fxHarp = game.add.audioSprite('light_harp');
	fxHarp.allowMultiple = true;
	
	fxPan = game.add.audioSprite('light_pan');
	fxPan.allowMultiple = true;
	
	fxPizz = game.add.audioSprite('light_pizz');
	fxPizz.allowMultiple = true; 	
	
	sounds = [fxVibes, fxGlock, fxHarp, fxPan, fxPizz];
}