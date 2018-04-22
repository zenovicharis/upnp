import "../style/main_sn.scss";

$(document).ready(function(){
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    // console.log(url)
    window.location = url;
  })
  

  $(".shortened").each(function(el, p){
    var text = $.parseHTML($(p).text());
    console.log(text);
    var shortened= $(text).text().substring(0,150);
    $(p).text(shortened);
  });

  $(".hamburger").on("click", function(){
    toggleMenu()
  })
  function toggleMenu(){
    var rightPosition = parseInt($(".custom-showing").css('right'));
    console.log(rightPosition);
    if(rightPosition < 0){
      $(".custom-showing").css('right', '0%')
    } else {
      $(".custom-showing").css('right', '-33%')
    }
  }
});
