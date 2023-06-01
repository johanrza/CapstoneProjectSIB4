import newsData from './scraping/berita-nelayan-detik.json' assert { type: "json" };

const article = document.querySelector('#card');
article.innerHTML = '';

newsData.news.forEach(({ image, title, description, newsUrl }) => {
  article.innerHTML += `
    <div class="col">
    <div class="card h-100">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <a href="${newsUrl}" class="btn px-0" target="_blank">Read More <i class="fa-solid fa-angles-right"></i></a>
      </div>
    </div>
  </div>`;
});
