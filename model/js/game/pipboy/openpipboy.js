$('#pipboyOpener').click(function(){
    var wWidth = $('#pipboyInterface').css('width');
    if (wWidth > '0vh'){
        $('#pipboyInterface').css('width', '0vw');
        pboyHum.pause();
        pboyHum.currentTime = 0;
        pboyExit.play();
    }
    else{
        $('#pipboyInterface').css('width', '70vw');
        pboyAccess.play();
        pboyHum.play();
        pboyHum.loop = true;
    }
});