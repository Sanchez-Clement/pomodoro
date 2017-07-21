var minuteSession= 1;
var minuteBreak = 1;
var secondeSession = -1;
var secondeBreak = -1;
var clearBreak;
var clearSession;
var clickCompteur = 0;
var testminute = 0;

// ***********************affichage de départ****************************************

$("#break .time").text(minuteBreak);
$("#compteurBreak .compteur p").text(minuteBreak);
$("#session .time").text(minuteSession);
$("#compteurSession .compteur p").text(minuteSession);

// *************************************augmenter ou diminuer compteur break***************************
function selectClick() {
$("#break p:first").click(function() {
  if(minuteBreak >1) {
  minuteBreak--;}
  secondeBreak = -1;
  $("#break .time").text(minuteBreak);
$("#compteurBreak .compteur p").text(minuteBreak);
})


$("#break p:last").click(function() {
  minuteBreak++;
  secondeBreak = -1;
  $("#break .time").text(minuteBreak);
$("#compteurBreak .compteur p").text(minuteBreak);
})


// *************************************augmenter ou diminuer compteur session***************************


$("#session p:first").click(function() {
  if(minuteSession > 1) {
  minuteSession--;}
  secondeSession = -1;
  $("#session .time").text(minuteSession);
$("#compteurSession .compteur p").text(minuteSession);
$("#green").slideUp(1000);
})

$("#session p:last").click(function() {

  minuteSession++;
  secondeSession = -1;
  $("#session .time").text(minuteSession);
$("#compteurSession .compteur p").text(minuteSession);
$("#green").slideUp(1000);
})

}


// **************************************début des fonction***********************************


/**
 * compteurSession - chronometre pour session;
 *
 * @return {type}  no return
 */
function compteurSession() {



// // alert("oui");


// alert(minuteBreak);
$("#selecteurs p").off("click");


  secondeSession --;
  if (secondeSession < 0) {
    secondeSession = 59;
    minuteSession --;

  }

$("#compteurSession .compteur p").text(minuteSession + ":" + secondeSession);

if (secondeSession < 10) {
  $("#compteurSession .compteur p").text(minuteSession + ": 0" + secondeSession);
}



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

if (secondeBreak < 10) {
  $("#compteurBreak.compteur p").text(minuteBreak + ": 0" + secondeBreak);
}

if (secondeBreak ==0 && minuteBreak ==0) {
  secondeBreak = -1;
  // minuteBreak = $("#break .time").text() - 1;
  // alert("oui");
  clearInterval(clearBreak);
  compteurSession=0;

session();

}
}




/**
 * session - lance le chronometre pour la session
 *
 * @return {type}  no return
 */
function session() {
clickCompteur++;


if (clickCompteur ==1) {


  minuteSession = $("#session .time").text();

clearSession =setInterval(compteurSession, 1000);
$("#compteurBreak").hide();
$("#red").slideUp(1000);
$("#compteurSession").show();
 $("#green").slideDown(minuteSession * 60000);

}

if (clickCompteur %2 == 0) {

  $("#compteurSession").click(pauseSession());
} else if( clickCompteur %2 != 0  && clickCompteur !=1 ){
  repriseSession();
}
console.log(clickCompteur);


}

function lanceBreak() {

minuteBreak = $("#break .time").text();
// alert(minuteBreak);
// $("#compteurSession .compteur p").text(minuteSession + ":" + secondeSession);
clearBreak = setInterval(compteurBreak, 1000);
$("#compteurSession").hide();
$("#green").slideUp(1000);
$("#compteurBreak").show();

$("#red").slideDown(minuteBreak * 60000);
}


function pauseSession() {
clickselecteur=0;
testminute = minuteSession;
console.log(testminute);

   $("#green").stop();
  clearInterval(clearSession);
  selectClick();


}

function repriseSession() {

  $("#green").slideDown(minuteSession * 60000 + secondeSession * 1000);
console.log(minuteSession,secondeSession);
  clearSession =setInterval(compteurSession, 1000);
}


// **********************fin des fonctions**************************************
selectClick();

if (clickCompteur==0) {

$("#compteurSession").click(session);}
