import "../style/main_n.scss";
import 'bootstrap';
var news = require("./news-single");

$(document).ready(function(){
  $("body").css("display", "block");

  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    window.location = url;
  });

  $.ajax({
    type: "get",
    url: "/api/news/serbian",
    success: function (response) {
      var newsList = response.map(el => {
        var text = $.parseHTML(el.content);
        el.content = $(text).text().substring(0,400);
        return news.getNews(el);
      });
      $("div.main-container").append(newsList.join(""));
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
    toggleMenu()
  })
  function toggleMenu(){
    var rightPosition = parseInt($(".custom-showing").css('right'));
    if(rightPosition < 0){
      $(".custom-showing").css('right', '0%')
    } else {
      $(".custom-showing").css('right', '-33%')
    }
  }

});
