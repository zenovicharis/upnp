import "../style/main_a.scss";


$(document).ready(function(){
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    window.location = '/';
  })
});