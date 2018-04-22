import "../style/main_v.scss";


$(document).ready(function(){
  $("body").css("display", "block");
  $("#upload-button").on('click', function(){
    $("#upload").click();
    return false;
  })
  $("#logo").on('click', function(){
    window.location = '/';
  });

  
});