$('#pipboyOpener').click(function(){
    var wWidth = $('#pipboyInterface').css('width');
    if (wWidth > '0vh'){
        pboyExit.play();
        pboyHum.pause();
        pboyHum.currentTime = 0;
        $("#pipboyInterface").css('background-image','url("")');
        $("#pipboyInterfaceContent").css('visibility', 'hidden');
        $("#pipboyInterface").animate({width:'0vw'},200);
        //$('#pipboyInterface').css('width', '0vw');
        
        
    }
    else{
        pboyAccess.play();
        $("#pipboyInterface").animate({width:'70vw'},200);
        setTimeout(function(){
            $("#pipboyInterface").css('background-image','url("assets/img/pipboy/pboyscreen.png")');
            $("#pipboyInterfaceContent").css('visibility', 'visible');
            pboyHum.play();
            pboyHum.loop = true;
        },200);
        
        //$('#pipboyInterface').css('width', '70vw');
        
    }
});