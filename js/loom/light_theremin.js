var lightMain = function(game){
	noteNLight = 1;
	oldNoteLight = -1;
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
		SENSITIVITY: 2.5,
		SOUND: 0
	};
};

lightMain.prototype = {
    create: function(){
		loadSounds();
		
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
    
    debugText.text = luminosity;
    
    var place = Math.round(luminosity * config.SENSITIVITY / 50);
    if (place > colors.length - 1) place = colors.length - 1;
    game.stage.backgroundColor = '#' + colors[place];
    
    lightSprite.scale.set(place / 17, place / 17);

    var noteNLight = Math.round( ( (luminosity * 1.25) + (300 * config.SENSITIVITY)) / 300 );
    if (noteNLight > 23) noteNLight = 23;
    else if (noteNLight < 1) noteNLight = 1;
	
	if (noteNLight != oldNoteLight){
		try{
			sounds[config.SOUND].play(noteNLight);
		}catch(e){}	
	}
	
	oldNoteLight = noteNLight;
}

function startGUI(){
    var gui = new dat.GUI({ width: 300 });
    gui.add(config, 'SENSITIVITY', 1.0, 10.0).name('sensitivity');
    gui.add(config, 'SOUND', { 'Vibraphone': 0, 'Glockenspiel': 1, 'Harp': 2, 'Kalimba': 3 , 'Pizzicato' : 4 }).name('instrument');
    
	/*gui.add(config, 'DYE_RESOLUTION', { 'high': 1024, 'medium': 512, 'low': 256, 'very low': 128 }).name('quality').onFinishChange(initFramebuffers);
    gui.add(config, 'SIM_RESOLUTION', { '32': 32, '64': 64, '128': 128, '256': 256 }).name('sim resolution').onFinishChange(initFramebuffers);
    gui.add(config, 'DENSITY_DISSIPATION', 0, 4.0).name('density diffusion');
    gui.add(config, 'PRESSURE', 0.0, 1.0).name('pressure');
    gui.add(config, 'CURL', 0, 50).name('vorticity').step(1);
    gui.add(config, 'SPLAT_RADIUS', 0.01, 1.0).name('splat radius');*/
    
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
	
	fxKalimba = game.add.audioSprite('light_kalimba');
	fxKalimba.allowMultiple = true;
	
	fxPizz = game.add.audioSprite('light_pizz');
	fxPizz.allowMultiple = true; 	
	
	sounds = [fxVibes, fxGlock, fxHarp, fxKalimba, fxPizz];
}