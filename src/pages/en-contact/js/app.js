import "../style/main_c.scss";
import "./jquery.validate.min.js";
import "./additional-methods.min.js";
import "bootstrap";
$.urlParam = function (name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                    .exec(window.location.search);

  return (results !== null) ? decodeURIComponent(results[1]).split('+').join(' ') || 0 : false;
}
$(document).ready(function() {
  let succesfulMessage = $.urlParam('message');
  let errorMessage = $.urlParam('errormessage');
  if (succesfulMessage || errorMessage) {
    let message = succesfulMessage ? succesfulMessage : errorMessage;
    $("#customHeaderModal").css('background-color', succesfulMessage ? '' : 'red' );
    $("#modalText").text(message);
    $("#myModal").modal();
  }
  $("body").css("display", "block");
  $("#logo").on("click", function() {
    var url = $(this).attr("data-url");
    window.location = url;
  });

  $.ajax({
    type: "get",
    url: "/api/projects/english",
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
      name: "Please enter your name",
      email: {
        required: "Please enter your E-mail address",
        email: "Please enter valid E-mail address"
      },
      title: {
        required: "Please enter the title of your message"
      },
      message: {
        required: "Please enter your message"
      }
    }
  });

});
