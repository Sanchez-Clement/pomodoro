var minuteSession= 0;
var minuteBreak = 30;
var secondeSession = -1;
var secondeBreak = 59;
// ***********************affichage de départ****************************************

$("#break .time").text(minuteBreak);
$("#compteurBreak .compteur p").text(minuteBreak);
$("#session .time").text(minuteSession);
$("#compteurSession .compteur p").text(minuteSession);

// *************************************augmenter ou diminuer compteur break***************************
$("#break p:first").click(function() {
  minuteBreak--;
  $("#break .time").text(minuteBreak);
$("#compteurBreak .compteur p").text(minuteBreak);
})


$("#break p:last").click(function() {
  minuteBreak++;
  $("#break .time").text(minuteBreak);
$("#compteurBreak .compteur p").text(minuteBreak);
})
// *************************************augmenter ou diminuer compteur session***************************


$("#session p:first").click(function() {
  minuteSession--;
  $("#session .time").text(minuteSession);
$("#compteurSession .compteur p").text(minuteSession);
})

$("#session p:last").click(function() {
  minuteSession++;
  $("#session .time").text(minuteSession);
$("#compteurSession .compteur p").text(minuteSession);
})




// **************************************début des fonction***********************************


/**
 * compteurSession - chronometre pour session;
 *
 * @return {type}  no return
 */
function compteurSession() {


  secondeSession --;
  if (secondeSession < 0) {
    secondeSession = 59;
    minuteSession --;

  }

$("#compteurSession .compteur p").text(minuteSession + ":" + secondeSession);
}




/**
 * session - lance le chronometre pour la session
 *
 * @return {type}  no return
 */
function session() {
// $("#compteurSession .compteur p").text(minuteSession + ":" + secondeSession);
setInterval(compteurSession, 1000);

}


// **********************fin des fonctions**************************************


$("#compteurSession").click(session);
