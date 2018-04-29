import "../style/main_pl.scss";

$(document).ready(function(){
  
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    window.location = '/';
  })
  $(".shortened").each(function(el, p){
    var text = $.parseHTML($(p).text());
    var shortened= $(text).text().substring(0,550);
    $(p).text(shortened);
  });
});
