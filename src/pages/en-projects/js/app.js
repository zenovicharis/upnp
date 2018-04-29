import "../style/main_n.scss";
var news = require("./news-single");
import "bootstrap";

$(document).ready(function(){
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    window.location = url;
  })
  

  $.ajax({
    type: "get",
    url: "/api/projects/english",
    // data: data,
    success: function (response) {
      var newsList = response.map(el => {
        var text = $.parseHTML(el.content);
        el.content = $(text).text().substring(0,550);
        return news.getNews(el);
      });
      $("div.main-container").append(newsList.join(""));
    },
    contentType: false,
    cache: false,
    processData: false,
    // dataType: dataType
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
