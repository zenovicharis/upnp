import "../style/main_sn.scss";
import "bootstrap";

$(document).ready(function(){
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    window.location = url;
  })
  var urlArray = window.location.href.split('/');
  var lang = urlArray[urlArray.length - 1];

  $.ajax({
    type: "get",
    url: lang == "english" ? "/api/projects/english" : "/api/projects/serbian",
    success: function (response) {
      var dropDownList = response.map(el => {
        var btn = $('<a href="#" class="list-group-item list-group-item-action">');
        $(btn).text(el.title);
        $(btn).attr('href','/public/news/'+ el.id);
        return  btn[0];
      });

      var temp = $('<div class="list-group" id="custom-dropdown">').append(dropDownList)
      $("#proj").tooltip({
        template:'<div class="list-group" id="custom-dropdown">'+temp.html() + '</div>'
      });
    },
    contentType: false,
    cache: false,
    processData: false,
  });

  $(".single-news").click(function(){
    var link = $(this).find('a');
    link[0].click();
  })

  $(".shortened").each(function(el, p){
    var text = $.parseHTML($(p).text());
    var shortened= $(text).text().substring(0,100);
    $(p).text(shortened);
  });

  $(".hamburger").on("click", function(){
    toggleMenu();
  });

  function toggleMenu(){
    var rightPosition = parseInt($(".custom-showing").css('right'));
    if(rightPosition < 0){
      $(".custom-showing").css('right', '0%')
    } else {
      $(".custom-showing").css('right', '-33%')
    }
  }
});
