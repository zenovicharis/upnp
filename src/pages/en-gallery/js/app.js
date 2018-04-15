import "../style/main_g.scss";
import '../../../../node_modules/lightbox2/dist/css/lightbox.min.css';
import '../../../../node_modules/lightbox2/dist/js/lightbox.js';
const albumShell = require('./album-shell');
const albumImage = require('./album-image');


$(document).ready(function(){
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    // console.log(url)
    window.location = url;
  })

  // console.log(LightBox);

  $.ajax({
    type: "get",
    url: "http://upnp.ga/api/albums",
    // data: data,
    success: function (response) {
      var albums = response.forEach(el => {
        var images = el.images.map(img => {
          return albumImage.getImage(img);
        })
        var albumShellContainer = albumShell.getShell(el);
        $(".gallery").append(albumShellContainer);
        var id = $(albumShellContainer).attr('id');

        $("#"+id).append(images.join(''));
        //  $(albumShellContainer).append(images.join(''));
        // console.log(albumShellContainer.html())
        // return albumShellContainer.html()
      });
      // console.log(albums);
      // $(".gallery").append(albums.join(''));
    },
    contentType: false,
    cache: false,
    processData: false,
    // dataType: dataType
  });


  $(document).on("click", "div.column", function(){
    var id = $(this).attr("id");
    console.log(id);
    var link = $("#"+id).find('a');
    $(link[0]).click();
    // return false;
  });
});