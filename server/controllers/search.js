const fetch = require('node-fetch');
const URL = require('url').URL;
const apiKey = process.env.API_KEY;

const searchForNews = (req, res) => {
  const endPoint = `https://api.currentsapi.services/v1/search?keywords=${req.query.q}&language=${req.query.lang}&apiKey=${apiKey}`;
  const url = new URL(endPoint);
  fetch(url)
    .then((body) => body.json())
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
};
module.exports = { searchForNews };
