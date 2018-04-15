import "../style/main_v.scss";
import "./jquery.validate.min.js";
import "./additional-methods.min.js";


$(document).ready(function(){
  $("body").css("display", "block");
  $("#upload-button").on('click', function(){
    $("#upload").click();
    return false;
  })

  $("#upload").on('change', function(e){
    var fileName = e.target.files[0].name;
    console.log(fileName);
    if(fileName != null){
      $("p#uploaded").text("You uploaded: " + fileName);
    } else {
      $("p#uploaded").text('');
    }
  });


  $("#logo").on('click', function(){
    window.location = '/';
  });
  $("#createForm").validate({
    rules: {
        title: {
            required: true
        },
        english_title: {
            required: true
        },
        image: {
            required: true
        }
    }
  });
});