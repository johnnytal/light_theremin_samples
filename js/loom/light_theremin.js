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
};

lightMain.prototype = {
    create: function(){
		fxVibes = game.add.audioSprite('light_vibes');
    	fxVibes.allowMultiple = true;
    	
    	debugText = game.add.text(20, 20, 'light: ' + 0, {font: '42px', fill: 'white'});

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
    }, 50);
}

function readLight(reading){
    luminosity = parseInt(reading.intensity);
    
    debugText.text = 'light: ' + luminosity;
    
    var place = Math.round(luminosity / 50);
    if (place > colors.length - 1) place = colors.length - 1;
    game.stage.backgroundColor = '#' + colors[place];

    var noteNLight = Math.round( ( (luminosity * 1.25) + 300) / 300 );
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
}