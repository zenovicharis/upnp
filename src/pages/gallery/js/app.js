import "../style/main_g.scss";
import '../../../../node_modules/lightbox2/dist/css/lightbox.min.css';
import '../../../../node_modules/lightbox2/dist/js/lightbox.js';
const albumShell = require('./album-shell');
const albumImage = require('./album-image');

$(document).ready(function(){
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    window.location = url;
  })


  $.ajax({
    type: "get",
    url: "http://upnp.ga/api/albums",
    success: function (response) {
      var albums = response.forEach(el => {
        var images = el.images.map(img => {
          return albumImage.getImage(img);
        })
        var albumShellContainer = albumShell.getShell(el);
        $(".gallery").append(albumShellContainer);
        var id = $(albumShellContainer).attr('id');

        $("#"+id).append(images.join(''));
      });
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
    console.log(rightPosition);
    if(rightPosition < 0){
      $(".custom-showing").css('right', '0%')
    } else {
      $(".custom-showing").css('right', '-33%')
    }
  }

  $(document).on("click", "div.column", function(){
    var id = $(this).attr("id");
    console.log(id);
    var link = $("#"+id).find('a');
    $(link[0]).click();
    // return false;
  });
});