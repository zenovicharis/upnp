import "../style/main_v.scss";
import "bootstrap";


$(document).ready(function(){

  $("body").css("display", "block");
  $("#upload-button").on('click', function(){
    $("#upload").click();
    return false;
  })
  $("#logo").on('click', function(){
    window.location = '/';
  });
  $("#upload").on("change", function(e){
    e.preventDefault();
    var fileName = e.target.files[0].name;
    if (fileName != null) {
      $("#dialog-box").modal();
    }
  });

  $("#btn-submit-upload").click(function(){
    $("#change-photo").submit();
  });

  $("#delete-form").submit(function(e){
      var toDelete = confirm("Da li zelite da izbrisete ovu sliku");
      if(!toDelete){
        return false;
      }
  });


  $("#btn-delete-upload").click(function() {
    $("#upload").val('');
    $("#dialog-box").modal('hide');
  });
});