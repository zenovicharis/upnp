import "../style/main_c.scss";
import "./jquery.validate.min.js";
import "./additional-methods.min.js";
import "bootstrap";

$(document).ready(function() {
  $("body").css("display", "block");
  $("#logo").on("click", function() {
    var url = $(this).attr("data-url");
    // console.log(url)
    window.location = url;
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

  $(".hamburger").on("click", function() {
    toggleMenu();
  });

  function toggleMenu() {
    var rightPosition = parseInt($(".custom-showing").css("right"));
    console.log(rightPosition);
    if (rightPosition < 0) {
      $(".custom-showing").css("right", "0%");
    } else {
      $(".custom-showing").css("right", "-33%");
    }
  }

  $("#contact-form").validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true
      },
      title: {
        required: true
      },
      message: {
        required: true
      }
    },
    messages: {
      name: "Unesite vase ime i prezime",
      email: {
        required: "Unesite vasu e-mail adresu",
        email: "Unesite tacnu e-mail adresu"
      },
      title: {
        required: "Unesite vasu naslov poruke"
      },
      message: {
        required: "Unesite vasu poruku"
      }
    }
  });
});
