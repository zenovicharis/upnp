import '../style/main.scss';
const newsSet = require('./news-set');
import "bootstrap";

$(document).ready(function() {

  $("body").css("display", "block");
  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    window.location = url;
  })
  $("#patreons").on("click", function(){
    window.location = "/en/patreon"
  });

  $.ajax({
    type: "get",
    url: "/api/projects/english",
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

  $.ajax({
    type: "get",
    url: "/api/news/english",
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
    url: "/api/projects/english",
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
  
    if(rightPosition < 0){
      $(".custom-showing").css('right', '0%')
    } else {
      $(".custom-showing").css('right', '-33%')
    }
  }

  $(".single-news").click(function(){
    var link = $(this).find('a');
    link[0].click();
  })
})