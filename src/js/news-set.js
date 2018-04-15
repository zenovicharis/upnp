exports.getNews = function (news){ 
  return `
  <div class="col p-0">
    <img class="card-img-top no-radius" src="`+news[0].images.url+`" alt="Card image cap">
    <div class="card-body">
      <h5>`+news[0].title+`</h5>
      <p class="card-text">`+news[0].content+`</p>
    </div>
  </div>

  <div class="col p-0">
    <img class="card-img-top no-radius" src="`+news[1].images.url+`" alt="Card image cap">
    <div class="card-body">
      <h5>`+news[1].title+`</h5>
      <p class="card-text">`+news[1].content+`</p>
    </div>
  </div>

  <div class="col p-0">
    <img class="card-img-top no-radius" src="`+news[2].images.url+`" alt="Card image cap">
    <div class="card-body">
      <h5>`+news[2].title+`</h5>
      <p class="card-text">`+news[2].content+`</p>
    </div>
  </div>
`;
}