exports.getNews = function (news){ 
  return `<div class="row news-sections" >
  <span class="date">`+ news.created +`</span>
  <div class="col-sm-6 col-12 news-picture">
    <img src="`+ news.images.url +`" alt="">
  </div>
  <div class="col-sm-6 col-12">
    <h4>`+news.title +`</h4>
    <p class="text-justify">
    `+news.content +`
    </p>
    <button class="btn btn-default btn-custom" onclick="toSingleNews(`+news.id+`)">Procitaj jos</button>
  </div>
</div>
`;
}