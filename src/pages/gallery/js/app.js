import "../style/main_g.scss";
import '../../../../node_modules/lightbox2/dist/css/lightbox.min.css';
import '../../../../node_modules/lightbox2/dist/js/lightbox.js';
const albumShell = require('./album-shell');
const albumImage = require('./album-image');
import "bootstrap";

$(document).ready(function(){
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    window.location = url;
  })


  $.ajax({
    type: "get",
    url: "/api/albums",
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
  });

  function toggleMenu(){
    var rightPosition = parseInt($(".custom-showing").css('right'));
    if(rightPosition < 0){
      $(".custom-showing").css('right', '0%')
    } else {
      $(".custom-showing").css('right', '-33%')
    }
  }

  $(document).on("click", "div.column", function(){
    var id = $(this).attr("id");
    var link = $("#"+id).find('a');
    $(link[0]).click();
    // return false;
  });
});