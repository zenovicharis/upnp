import '../style/main.scss';
const newsSet = require('./news-set');

$(document).ready(function() {
  $("body").css("display", "block");

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

})