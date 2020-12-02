// const { default: fetch } = require('node-fetch');

// const { response } = require('express');
// const { default: fetch } = require('node-fetch');

const category = document.getElementById('categories-select');
const inputLanguage = document.getElementById('languages-select');
const displayButton = document.getElementById('display-button');
const newsContainer = document.getElementById('news-container');
const searchField = document.getElementById('search-field');
const searchBtn = document.getElementById('search-btn');

const renderData = (data) => {
  const newsArray = data.news;
  newsContainer.innerHTML = '';
  for (let i = 0; i < 10; i += 1) {
    const newsElement = document.createElement('div');
    const newsText = document.createElement('div');
    const title = document.createElement('p');
    const description = document.createElement('p');
    const image = document.createElement('img');
    newsElement.setAttribute('class', 'news-element');
    newsText.setAttribute('class', 'news-text');
    title.setAttribute('class', 'title');
    description.setAttribute('class', 'description');
    image.setAttribute('class', 'image');

    title.textContent = newsArray[i].title ? newsArray[i].title : '';
    description.textContent = newsArray[i].description;
    image.src = newsArray[i].image.includes('http')
      ? newsArray[i].image
      : 'https://www.thebalancecareers.com/thmb/25JVJEa7LCrP8pAVSEIZsvcQ67s=/3000x2063/filters:fill(auto,1)/452926771-57a555e65f9b58974ac6c478.jpg';

    newsText.appendChild(title);
    newsText.appendChild(description);
    newsElement.appendChild(newsText);
    newsElement.appendChild(image);

    newsContainer.appendChild(newsElement);
  }
};

searchBtn.addEventListener('click', () => {
  let language = 'en';
  if (inputLanguage.value) {
    language = inputLanguage.value;
  }

  fetch(`/news?q=${searchField.value}&lang=${language}`)
    .then((response) => response.json())
    .then(renderData);
});

function rendering() {
  if (!searchField.value) {
    fetch('/latest-news')
      .then((response) => response.json())
      .then(renderData);
  }
}

category.addEventListener('change', () => {
  newsContainer.textContent = '';
  if (category.value) {
    fetch(`/categorized-news?category=${category.value}`)
      .then((response) => response.json())
      .then(renderData);
  } else {
    rendering();
  }
});

window.onload = rendering();
