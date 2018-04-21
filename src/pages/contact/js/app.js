import "../style/main_c.scss";
import "./jquery.validate.min.js";
import "./additional-methods.min.js";

$(document).ready(function() {
  $("body").css("display", "block");
  $("#logo").on("click", function() {
    var url = $(this).attr("data-url");
    // console.log(url)
    window.location = url;
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
