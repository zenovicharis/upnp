import "../style/main_v.scss";


$(document).ready(function(){
  $("body").css("display", "block");
  $("#upload-button").on('click', function(){
    $("#upload").click();
  })
  $("#logo").on('click', function(){
    window.location = '/';
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
  //   // console.log(data);
  //   // $.post("http://upnp.ga/volountieer/create", data, function(response){
  //   //   console.log(response);
  //   // }).fail(function(err){
  //   //   console.log(err);
  //   // })
  // })
});