import "../style/main_v.scss";
import "./jquery.validate.min.js";
import "./additional-methods.min.js";

$(document).ready(function () {
  $("body").css("display", "block");
  $("#logo").on('click', function () {
    window.location = '/';
  });

  $("#volontieer-form").submit(function (e) {
    e.preventDefault();
    var dataArray = $(this).serializeArray();

    var data = dataArray.reduce(function (form, el) {
      form[el.name] = el.value;
      return form;
    }, {});
    console.log(data);
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
      name: {
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