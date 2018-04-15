import "../style/main_v.scss";
import "./jquery.validate.min.js";
import "./additional-methods.min.js";

$(document).ready(function(){
  $("body").css("display", "block");
  $("#upload-button").on('click', function(){
    $("#upload").click();
    return false;
  })
  $("#logo").on('click', function(){
    window.location = '/';
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
        },
    }
});

$("#upload").on('change', function(e){
  var fileName = e.target.files[0].name;
  console.log(fileName);
  if(fileName != null){
    $("p#uploaded").text("You uploaded: " + fileName);
  } else {
    $("p#uploaded").text('');
  }
});

  // $("#volontieer-form").submit(function(e){
  //   e.preventDefault();
  //   var dataArray = $(this).serializeArray();

  //   var data = dataArray.reduce(function(form, el){
  //     form[el.name] =  el.value;
  //     return form;
  //   }, {});
  //   console.log(data);
  //   $.ajax({
  //     type: "POST",
  //     url: "http://upnp.ga/volountieer/create",
  //     data: data,
  //     success: function(response){
  //       console.log(response);
  //     },
  //     contentType:false,
  //     cache: false,
  //     processData:false,
  //     // dataType: dataType
  //   });
    // console.log(data);
    // $.post("http://upnp.ga/volountieer/create", data, function(response){
    //   console.log(response);
    // }).fail(function(err){
    //   console.log(err);
    // })
  // })
});