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
    var fileName = e.target.files[0].name;
    if (fileName != null) {
      $("#dialog-box").modal();
    } else {
      $("p#uploaded").text("");
    }
  });

  $("#btn-submit-upload").click(function() {
    $("#change-photo").submit();
    $("#dialog-box").modal('hide');
    $("#loading-box").modal({keyboard: false});
  });

  $("#btn-delete-upload").click(function() {
    $("#upload-form").val('');
    $("#dialog-box").modal('hide');
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

  $("#delete-form").submit(function(e){
    var toDelete = confirm("Da li zelite da izbrisete ovaj Album");
    if(!toDelete){
      return false;
    }
  });
  $("#delete-form-image").submit(function(e){
    var toDelete = confirm("Da li zelite da izbrisete ovu sliku");
    if(!toDelete){
      return false;
    }
  });

  
});
