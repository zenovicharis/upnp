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

  $("#createForm").submit(function(){
    if($("#createForm").valid()){
      $("#loading-box").modal({keyboard: false});
    }
  });

  $("#loading-box").click(function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    return false; 
  });

  setTimeout(function(){
    var coll = $(".mce-close");
    $(".mce-close").click();
    console.log(coll);
  },1500);

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
    var fileName = e.target.files[0].name;
    if (fileName != null) {
      $("#dialog-box").modal();
    }
  });

  $("#btn-submit-upload").click(function() {
    $("#change-photo").submit();
  });

  $("#btn-delete-upload").click(function() {
    $("#upload-form").val('');
    $("#dialog-box").modal('hide');
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

  $("#delete-form").submit(function(e){
    e.preventDefault();
    var toDelete = confirm("Da li zelite da izbrisete ovu Vest");
    if(!toDelete){
      return false;
    }
  });
});
