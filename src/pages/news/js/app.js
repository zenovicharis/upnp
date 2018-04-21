import "../style/main_n.scss";
var news = require("./news-single");

$(document).ready(function(){
  $("body").css("display", "block");

  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    window.location = url;
  });
    $.ajax({
      type: "get",
      url: "http://upnp.ga/api/news",
      success: function (response) {
        var newsList = response.map(el => {
          return news.getNews(el);
        })
        $("div.main-container").append(newsList.join(""));
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
      console.log(rightPosition);
      if(rightPosition < 0){
        $(".custom-showing").css('right', '0%')
      } else {
        $(".custom-showing").css('right', '-33%')
      }
    }

});
