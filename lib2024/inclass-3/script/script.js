window.onload = init;

function init() {

$(document).ready(function(){
  $("#hide").click(function(){
    $("#content").hide();
  });
});

  $("#show").click(function(){
    $("#content").show();
  });
};

  $("#small").click(function(){
    $(".content").css({"font-size": "12px"});
  });

$("#big").click(function(){
    $(".content").css({"font-size": "48px"});
  });

$("#blue").click(function(){
    $(".content").css({"background-color": "#C5CAE9"});
  });

$("#red").click(function(){
    $(".content").css({"background-color": "#ffa291"});
  });
