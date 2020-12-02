const fetch = require('node-fetch');

const getLatestNews = (req, res) => {
  fetch(
    'https://api.currentsapi.services/v1/latest-news?language=en&apiKey=pE2ivILVQvsHP0_nz54Kw7OQB6IvgUiBob10O2FqC-HSDURs',
  )
    .then((body) => body.json())
    .then((response) => res.json(response))
    .catch((err) => console.log(err.message));
};

module.exports = { getLatestNews };
