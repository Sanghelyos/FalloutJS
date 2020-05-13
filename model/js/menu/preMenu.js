
//pre-menu
var vid = $('#MenuVideo')[0]; //Vidéo du menu
var zic = $('#MenuAudio')[0]; //Musique du menu 1 (FO3)
var zic2 = $('#MenuAudio2')[0];  //Musique du menu 2 (F4NV)

$('#LaunchGame').click(function() { //Bouton de pré-démarrage
  enterKey.play();
  vid.play();
  zic.play();
  $('.vidcontrols').css("display" , "none")
  $('video').css("display" , "block")
  setTimeout (function () {
    $('.menuButtonsDiv').fadeIn();
                    }, 14500);
}).mouseover(function() {
  charSingle.play();
});
$('#StartFO76').click(function() { //Lancer Fallout76 / fermer launcher
  zic.pause();
  zic2.pause();
});

//menu

$('.menuButtons').mouseover(function() { //sfx survol des boutons
  charSingle.play();
}).click(function() {
  enterKey.play();
});

$('.menuButtons').mouseover(function() { //Chevron survol des boutons

  var btnMenu = $(this).text();
  $(this).text('>'+ btnMenu);
}).mouseout(function() {

 var btnMenu = $(this).text().replace('>' , '');
 $(this).text(btnMenu);
});

$('#MenuAudio').bind('ended', function(){ //Musique du menu parès fin de la première
  zic2.play();
});

$('#ExitGameButton').click(function() { //quitter le jeu
  window.close();
});