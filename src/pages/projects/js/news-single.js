import moment from 'moment';

exports.getNews = function (news){ 
  return `<div class="row news-sections" >
  <span class="date">`+  moment(news.created).format('DD MMM YYYY') +`</span>
  <div class="col-sm-6 col-12 news-picture">
    <img src="`+ news.images.url +`" alt="">
  </div>
  <div class="col-sm-6 col-12 news-text">
    <h4>`+news.title +`</h4>
    <p class="text-justify news-content">
    `+news.content +`
    </p>
    <p class="position-relative"> 
      <button class="btn btn-default btn-custom" onclick="toOneNews(`+news.id+`)">Vise</button>
    </p>
  </div>
</div>
`;
}