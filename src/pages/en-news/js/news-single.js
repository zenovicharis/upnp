exports.getNews = function (news) {
  return `<div class="row news-sections" >
  <span class="date">` + news.created + `</span>
  <div class="col-6 news-picture">
    <img src="` + news.images.url + `" alt="">
  </div>
  <div class="col-6">
    <h4>` + news.title + `</h4>
    <p class="text-justify">
    ` + news.content + `
    </p>
    <button class="btn btn-default btn-custom" onclick="toSingleNews()">Read More</button>
  </div>
</div>
`;
}