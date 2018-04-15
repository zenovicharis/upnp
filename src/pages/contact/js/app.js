import "../style/main_c.scss";
import "./jquery.validate.min.js";
import "./additional-methods.min.js";

$(document).ready(function(){
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    // console.log(url)
    window.location = url;
  })

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
    }
  });
});