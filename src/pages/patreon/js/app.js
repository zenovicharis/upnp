import "../style/main_p.scss";


$(document).ready(function(){
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    window.location = '/';
  })
});