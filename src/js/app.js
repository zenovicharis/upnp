import '../style/main.scss';
import "bootstrap";

const newsSet = require('./news-set');

  $("#patreons").on("click", function(){
    window.location = "/patreon";
  });

  $.ajax({
    type: "get",
    url: "/api/news/serbian",
    success: function (response) {
      var newsList = newsSet.getNews(response);
      $("#news-block").append(newsList);
    },
    contentType: false,
    cache: false,
    processData: false,
  });

  $.ajax({
    type: "get",
    url: "/api/projects/serbian",
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



  $(".hamburger").on("click", function(){
    toggleMenu();
  });

  function toggleMenu(){
    var rightPosition = parseInt($(".custom-showing").css('right'));
    console.log(rightPosition);
    if(rightPosition < 0){
      $(".custom-showing").css('right', '0%')
    } else {
      $(".custom-showing").css('right', '-33%')
    }
  }
  
$(document).ready(function() {
  $("#slider").on('swiperight',function() {
    $(this).carousel('prev');
  });
  $("#slider").on('swipeleft',function() {
    $(this).carousel('next');
  });
  $(".single-news").click(function(){
    var link = $(this).find('a');
    link[0].click();
  })

});

$('html').bind("load", function() {
  $("body").css("display", "block");
});