const fetch = require('node-fetch');

const apiKey = process.env.API_KEY;

const getLatestNews = (req, res) => {
  fetch(
    `https://api.currentsapi.services/v1/latest-news?language=en&apiKey=${apiKey}`
  )
    .then((body) => body.json())
    .then((response) => res.json(response))
    .catch((err) => console.log(err.message));
};

const categorizedNews = (req, res) => {
  fetch(
    `https://api.currentsapi.services/v1/latest-news?category=${req.query.category}&apiKey=${apiKey}`
  )
    .then((body) => body.json())
    .then((response) => res.json(response))
    .catch((err) => console.log(err.message));
};

module.exports = { getLatestNews, categorizedNews };
