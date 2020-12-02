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

    title.textContent = newsArray[i].title;
    description.textContent = newsArray[i].description;
    image.src = newsArray[i].image;
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

  fetch(`/search/${searchField.value}/${language}`)
    .then((response) => response.json())
    .then(renderData);
});


(function rendering() {
  if (!searchField.value) {
    fetch('/latest-news')
      .then((response) => response.json())
      .then(renderData);
  }
}());

category.addEventListener('change', () =>{
  console.log(category.value);
}

// () => {

// if (searchField.value) {
//   search();
// }

// } else {
//   // console.log('Hee');
//   // document.removeChild(removeChild);

// }
