import newsData from './scraping/berita-nelayan-detik.json' assert { type: "json" };

const article = document.querySelector('#card');
article.innerHTML = '';

newsData.news.forEach(({ image, title, description, newsUrl }) => {
  article.innerHTML += `
    <div class="col">
    <div class="card h-100">
      <img src="${image}" class="card-img-top" alt="">
      <div id="newsBody" class="card-body d-flex flex-column">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <a class="icon-link icon-link-hover mt-auto" style="--bs-link-hover-color-rgb: 25, 135, 84;" href="${newsUrl}" target="_blank">Read More <i class="bi fa-solid fa-angles-right"></i></a>
      </div>
    </div>
  </div>`;
});
