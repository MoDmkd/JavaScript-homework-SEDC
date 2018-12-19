$("body").append("<div>");
$("div").css("height","400px");
$("div").css("width","400px");
$("div").css("background-color","grey");
$("div").mouseover(function() {
    $("div").css("margin-top","100px");
});
$("div").mouseout(function() {
    $("div").css("margin-top","0");
});