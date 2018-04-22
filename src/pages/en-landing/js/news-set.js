exports.getNews = function (news){ 
  return `
  <div class="col-md-4 col-12 p-0 ">
    <div class="image-responsive-custom">
      <img class="card-img-top no-radius" src="`+news[0].images.url+`" alt="Card image cap">
    </div>
    <div class="card-body">
      <h5>`+news[0].title+`</h5>
      <p class="card-text">`+$($.parseHTML(news[0].content)).text().substring(0, 250)+`</p>
    </div>
  </div>

  <div class="col-md-4 col-12 p-0">
    <div class="image-responsive-custom">
      <img class="card-img-top no-radius" src="`+news[1].images.url+`" alt="Card image cap">
    </div>
    <div class="card-body">
      <h5>`+news[1].title+`</h5>
      <p class="card-text">`+$($.parseHTML(news[1].content)).text().substring(0, 250)+`</p>
    </div>
  </div>

  <div class="col-md-4 col-12 p-0">
    <div class="image-responsive-custom">
      <img class="card-img-top no-radius" src="`+news[2].images.url+`" alt="Card image cap">
    </div>
    <div class="card-body">
      <h5>`+news[2].title+`</h5>
      <p class="card-text">`+$($.parseHTML(news[2].content)).text().substring(0, 250)+`</p>
    </div>
  </div>
`;
}