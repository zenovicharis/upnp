import '../style/main.scss';
const newsSet = require('./news-set');

$(document).ready(function() {
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    // console.log(url)
    window.location = url;
  })
  $("#patreons").on("click", function(){
    window.location = "patreon.html"
  });


  $.ajax({
    type: "get",
    url: "http://upnp.ga/api/news",
    success: function (response) {
      var newsList = newsSet.getNews(response);
      $("#news-block").append(newsList);
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
})