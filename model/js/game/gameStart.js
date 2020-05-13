
//démarrage d'une partie
var introVideo = $('#IntroVideo')[0];

$('#StartGame').click(function() { //Nouvelle partie
  vid.pause();
  vid.currenTime=0;

  zic.pause();
  zic.currenTime=0;

  zic2.pause();
  zic2.currenTime=0;
  $('#MenuVideo').css("display" , "none");
  $('.menuButtonsDiv').css("display" , "none");
  $('#MenuDiv').css("display" , "none");
  $('#IntroDiv').css("display" , "block");
  introVideo.play();
});

$('#IntroVideo').bind('ended', function(){ //action fin d'intro
  introVideo.pause();
  IntroVideo.currenTime=0;
  $('#IntroVideo').css("display" , "none");
  $('#IntroDiv').css("display" , "none");
  location.replace("game.html");
});

$('#IntroVideo').click(function() { //Nouvelle partie
  introVideo.pause();
  IntroVideo.currenTime=0;
  $('#IntroVideo').css("display" , "none");
  $('#IntroDiv').css("display" , "none");
  location.replace("game.html");
});