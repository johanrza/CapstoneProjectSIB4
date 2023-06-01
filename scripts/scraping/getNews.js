const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const NEWS_SOURCES = 'https://www.detik.com/tag/nelayan';
const FILE_NAME = 'scripts/scraping/berita-nelayan-detik.json';

let fishermanNews = { news: [] };

async function getNews() {
  try {
    const response = await axios.get(NEWS_SOURCES);
    const $ = cheerio.load(response.data);

    const newData = { news: [] };

    $('.list-berita article').each(function (i, element) {
      if (i > 5) {
        return false;
      }

      const image = $(element).find('.box_thumb img').attr('src') || null;
      const title = $(element).find('.title').text() || null;
      const desc = $(element).find('p').text() || null;
      const link = $(element).find('a').attr('href') || null;

      const listContainer = {
        image: `${image}`,
        title: `${title}`,
        description: `${desc}`,
        newsUrl: `${link}`,
      };

      newData.news.push(listContainer);
    });

    const isNewsData =
      JSON.stringify(newData) !== JSON.stringify(fishermanNews);

    if (isNewsData) {
      fishermanNews = newData;

      fs.writeFile(
        FILE_NAME,
        JSON.stringify(fishermanNews, null, 2),
        (error) => {
          if (error) throw error;
          console.log("file succesfully saved!");
        }
      );
    }
  } catch (error) {
    console.error(error);
  }
}

getNews();
