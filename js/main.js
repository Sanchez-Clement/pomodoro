var minuteSession= 0;
var minuteBreak = 30;
var secondeSession = 0;
var secondeBreak = 0;


$("#break .time").text(minuteBreak);
$("#session .time").text(minuteSession);
$("#break p:first").click(function() {minuteBreak--;$("#break .time").text(minuteBreak);})
$("#break p:last").click(function() {minuteBreak++;$("#break .time").text(minuteBreak);})
$("#session p:first").click(function() {minuteSession--;$("#session .time").text(minuteSession);})
$("#session p:last").click(function() {minuteSession++;$("#session .time").text(minuteSession);})

// $("#session p:first").click(function() {minuteSession--;$("#session .time").text(minuteSession)};)
// $("#session p:last").click(function() {minuteSession++;$("#session .time").text(minuteSession);})
