$("body").append(`<button id="show">Show Divs</div>`);
$("body").append(`<button id="hide">Hide Divs</div>`);
$("#hide").on("click", () => {
  $("#divOne").fadeOut(400);
  $("#divTwo").fadeOut(500);
  $("#divThree").fadeOut(600);
})
$("#show").on("click", () => {
  $("div").fadeIn();
})

$("body").append(`<div id="divOne"></div>`);
$("body").append(`<div id="divTwo"></div>`);
$("body").append(`<div id="divThree"></div>`);
$("div").text("lorem");
$("#divOne").css("color","red");
$("#divTwo").css("color","blue");
$("#divThree").css("color","lime");