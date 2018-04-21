exports.getShell = function (album){ 
  return `<div class="col-md-4 col-6 column " id="album-`+album.id+`">
  <div class="card hover-shadow" style="width: 80%; margin:auto;">
  <img src="`+album.images[0].url+`" alt="Card image cap" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title mb-0 text-center">`+album.title+`</h5>
  </div>
</div>`;
}

