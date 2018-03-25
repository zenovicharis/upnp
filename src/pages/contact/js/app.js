import "../style/main_c.scss";


$(document).ready(function(){
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    window.location = '/';
  })
});