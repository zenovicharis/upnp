import "../style/main_v.scss";
import "./jquery.validate.min.js";
import "./additional-methods.min.js";
import "bootstrap";

$(document).ready(function() {
  $("body").css("display", "block");
  $("#upload-button").on("click", function() {
    $("#upload").click();
    return false;
  });

  $("#upload").on("change", function(e) {
    var fileName = e.target.files[0].name;
    console.log(fileName);
    if (fileName != null) {
      $("p#uploaded").text("You uploaded: " + fileName);
    } else {
      $("p#uploaded").text("");
    }
  });

  $("#logo").on("click", function() {
    window.location = "/";
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
        required: true,
        filesize_max: 2
      }
    },
    messages:{
      title: "Unesite Naslov Albuma",
      english_title: "Unesite naslov albuma na Engleskom jeziku",
      image: "Postavite sliku"
    }
  });

  $("#upload-button-form").on("click", function() {
    $("#upload-form").click();
    return false;
  });

  $("#upload-form").on("change", function(e) {
    e.preventDefault();
    var fileName = $(this).val();
    $("#dialog-box").modal();
  });

  $("#btn-submit-upload").click(function() {
    $("#change-photo").submit();
  });

  jQuery.validator.addMethod(
    "filesize_max",
    function(value, element, param) {
      var isOptional = this.optional(element),
        file;

      if (isOptional) {
        return isOptional;
      }

      if ($(element).attr("type") === "file") {
        if (element.files && element.files.length) {
          file = element.files[0];
          return file.size && file.size <= param;
        }
      }
      return false;
    },
    "File size is too large."
  );
});
