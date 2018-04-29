import "../style/main_v.scss";


$(document).ready(function(){
  $("body").css("display", "block");
  $("#upload-button").on('click', function(){
    $("#upload").click();
    return false;
  })
  $("#logo").on('click', function(){
    window.location = '/';
  });

  $("#upload").on("change", function(e) {
    var fileName = e.target.files[0].name;
    if (fileName != null) {
      $("p#uploaded").text("You uploaded: " + fileName);
    } else {
      $("p#uploaded").text("");
    }
  });


  $("#delete-form").submit(function(e){
    var toDelete = confirm("Da li zelite da izbrisete ovaj Album");
    if(!toDelete){
      return false;
    }
  });
  
});