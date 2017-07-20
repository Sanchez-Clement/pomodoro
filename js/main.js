var minuteSession= 0;
var minuteBreak = 30;
var secondeSession = -1;
var secondeBreak = -1;
var clearBreak;
var clearSession;
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

// alert(minuteBreak);

  secondeSession --;
  if (secondeSession < 0) {
    secondeSession = 59;
    minuteSession --;

  }

$("#compteurSession .compteur p").text(minuteSession + ":" + secondeSession);
if (secondeSession ==0 && minuteSession ==0) {
  secondeSession = -1;
  minuteSession = $("#session .time").text() - 1;
  clearInterval(clearSession);

  lanceBreak();

}
}

function compteurBreak() {
// minuteBreak = $("#break .time").val;
// alert("non");
  secondeBreak --;
  if (secondeBreak < 0) {
    secondeBreak = 59;
    minuteBreak --;

  }

$("#compteurBreak .compteur p").text(minuteBreak + ":" + secondeBreak);
if (secondeBreak ==0 && minuteBreak ==0) {
  secondeBreak = -1;
  // minuteBreak = $("#break .time").text() - 1;
  // alert("oui");
  clearInterval(clearBreak);

session();

}
}




/**
 * session - lance le chronometre pour la session
 *
 * @return {type}  no return
 */
function session() {
  minuteSession = $("#session .time").text();
  alert(minuteSession);
// $("#compteurSession .compteur p").text(minuteSession + ":" + secondeSession);
clearSession =setInterval(compteurSession, 1000);
$("#compteurBreak").hide();
$("#red").slideUp(1000);
$("#compteurSession").show();
 $("#green").slideDown(minuteSession * 60000);
}

function lanceBreak() {

minuteBreak = $("#break .time").text();
alert(minuteBreak);
// $("#compteurSession .compteur p").text(minuteSession + ":" + secondeSession);
clearBreak = setInterval(compteurBreak, 1000);
$("#compteurSession").hide();
$("#green").slideUp(1000);
$("#compteurBreak").show();

$("#red").slideDown(minuteBreak * 60000);
}


// **********************fin des fonctions**************************************


$("#compteurSession").click(session);
