exports.getShell = function (album){ 
  return `<div class="col-4 column hover-shadow" id="album-`+album.id+`">
  <img src="`+album.images[0].url+`" alt="">
  <p class="mb-0 text-center">`+album.title+`</p>

  </div>
`;
}