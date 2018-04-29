import "../style/main_v.scss";
import "./jquery.validate.min.js";
import "./additional-methods.min.js";
import "bootstrap";

$(document).ready(function () {
  
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
    if(rightPosition < 0){
      $(".custom-showing").css('right', '0%')
    } else {
      $(".custom-showing").css('right', '-33%')
    }
  }

  $("body").css("display", "block");
  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    window.location = url;
  })

  $("#volontieer-form").submit(function (e) {
    e.preventDefault();
    var data = ''
    $.post( "/volountieer/create", data, function(response){
      $("#myModal").modal();
    });
  });


  $("#volontieer-form").validate({
    rules: {
      ime_prezime: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefon: {
        required: true
      },
      datum: {
        required: true
      },
      str_sprema: {
        required: true
      },
      hobi: {
        required: true
      },
      iskustvo: {
        required: true
      },
      podrucje_rada: {
        required: true
      },
      poslovi: {
        required: true
      },
      nedeljni_sati: {
        required: true
      }
    },
    messages:{
      ime_prezime: "Unesite vase ime i prezime",
      datum: "Unesite datum vaseg rodjenja",
      str_sprema: "Odaberite nivo vase strucne spreme",
      email: {
        required: "Unesite vasu e-mail adresu",
        email: "Unesite tacnu e-mail adresu"
      },
      telefon: {
        required: "Unesite vas kontakt telefon"
      },
      hobi: {
        required: "Unesite vas hobi"
      },
      iskustvo: {
        required: "Unesite vase iskustvo"
      },
      podrucje_rada: {
        required: "Odaberite podrucije vaseg rada"
      },
      poslovi: {
        required: "Unesite poslove kojim ste se bavili"
      },
      nedeljni_sati: {
        required: "Odaberite broj slobodnih sati"
      }
    }
  });

});