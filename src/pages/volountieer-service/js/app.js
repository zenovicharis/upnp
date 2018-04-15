import "../style/main_v.scss";
import "./jquery.validate.min.js";
import "./additional-methods.min.js";

$(document).ready(function () {
  $("body").css("display", "block");
  $("#logo").on('click', function(){
    var url = $(this).attr("data-url");
    // console.log(url)
    window.location = url;
  })

  $("#volontieer-form").submit(function (e) {
    e.preventDefault();
    var dataArray = $(this).serializeArray();

    var data = dataArray.reduce(function (form, el) {
      form[el.name] = el.value;
      return form;
    }, {});
    
    var nedeljni_sati =$('input.nedeljni_sati:checked');
    console.log(nedeljni_sati);
    $.ajax({
      type: "POST",
      url: "http://upnp.ga/volountieer/create",
      data: data,
      success: function (response) {
        console.log(response);
      },
      contentType: false,
      cache: false,
      processData: false,
      // dataType: dataType
    });
  })
  $("#volontieer-form").validate({
    rules: {
      ime_prezime: {
        required: true
      },
      datum: {
        required: true
      },
      str_sprema: {
        required: true
      },
      hobi: {
        required: true
      },
      iskustvo: {
        required: true
      },
      podrucje_rada: {
        required: true
      },
      poslovi: {
        required: true
      },
      nedeljni_sati: {
        required: true
      }
    }
  });

});