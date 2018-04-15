import "../style/main_p.scss";


$(document).ready(function(){
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    // console.log(url)
    window.location = url;
  })
});