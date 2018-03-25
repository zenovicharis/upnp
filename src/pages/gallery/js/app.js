import "../style/main_g.scss";
var gallery = require("./carousel-gallery.js");

$(document).ready(function(){
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    window.location = '/';
  })
  
});