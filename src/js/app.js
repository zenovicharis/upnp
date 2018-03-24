import '../style/main.scss';


$(document).ready(function() {
  $("body").css("display", "block");

  $("#patreons").on("click", function(){
    window.location = "patreon.html"
  });
})