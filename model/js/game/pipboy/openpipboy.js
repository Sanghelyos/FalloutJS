$('#pipboyOpener').click(function(){
    var wWidth = $('#pipboyInterface').css('width');
    if (wWidth > '0vh'){
        pboyExit.play();
        pboyHum.pause();
        pboyHum.currentTime = 0;
        // $("#pipboyInterface").css('background-image','url("")');
        $("#pipboyInterface").css('margin-right','0vw');
        $('#pipboyInterface').css('background-image', 'radial-gradient(#111, #111)')
        $("#pipboyInterfaceContent").css('visibility', 'hidden');
        $("#pipboyInterface").animate({width:'0vw'},200);
        //$('#pipboyInterface').css('width', '0vw');
        
        
    }
    else{
        pboyAccess.play();
        $("#pipboyInterface").animate({width:'92vw'},200);
        setTimeout(function(){
            // $("#pipboyInterface").css('background-image','url("assets/img/pipboy/pboyscreen.png")');
            $("#pipboyInterface").css('margin-right','4vw');
            $('#pipboyInterface').css('background-image', 'radial-gradient(#444, #111)')
            $("#pipboyInterfaceContent").css('visibility', 'visible');
            pboyHum.play();
            pboyHum.loop = true;
        },200);
        
        //$('#pipboyInterface').css('width', '70vw');
        
    }
});