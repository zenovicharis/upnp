exports.getImage = function (image){ 
  return `
  <a href="`+image.url+`" class="d-none" data-lightbox="image-`+image.album_id+`" data-title="album-`+image.album_id+`">
    <img src="`+image.url+`" class="w-100" alt="">
  </a>
`;
}