import "../style/main_v.scss";
import "./jquery.validate.min.js";
import "./additional-methods.min.js";
import "bootstrap";

$(document).ready(function() {
  tinymce.init({
    selector: "#content",
    plugins: "media",
    menubar: ["insert", "file", "edit", "view"],
    toolbar: "media",
    media_live_embeds: true
  });

  $("body").css("display", "block");
  $("#upload-button").on("click", function() {
    $("#upload").click();
    return false;
  });
  $("#logo").on("click", function() {
    window.location = "/";
  });
  $("#createForm").validate({
    rules: {
      title: {
        required: true
      },
      content: {
        required: true
      },
      image: {
        required: true
      },
      category: {
        required: true
      },
      language: {
        required: true
      }
    },
    messages:{
      title: "Unesite naslov Vesti",
      content: "Unesite sadrzaj Vesti",
      image: "Postavite sliku",
      category: "Odaberite kategoriju posta",
      language: "Odaberite jezik posta"
    }
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


  jQuery.validator.addMethod("filesize_max", function(value, element, param) {
    var isOptional = this.optional(element),
        file;
    
    if(isOptional) {
        return isOptional;
    }
    
    if ($(element).attr("type") === "file") {
        
        if (element.files && element.files.length) {
            
            file = element.files[0];            
            return ( file.size && file.size <= param ); 
        }
    }
    return false;
}, "File size is too large.");
});
