const express = require('express');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const app = express();
const env = require('env2')('./.env');

app.set('port', process.env.PORT || 1234);

app.use(express.static('public'));

app.get('/latest-news', (req, res) => {
  fetch(
    'https://api.currentsapi.services/v1/latest-news?language=en&apiKey=pE2ivILVQvsHP0_nz54Kw7OQB6IvgUiBob10O2FqC-HSDURs'
  )
    .then((body) => body.json())
    // .then(console.log)
    .then((response) => res.json(response))
    .catch((err) => console.log(err.message));
});

app.get('/search/:inputVal', (req, res) => {
  const url = `https://api.currentsapi.services/v1/search?keywords=${req.params.inputVal}&apiKey=pE2ivILVQvsHP0_nz54Kw7OQB6IvgUiBob10O2FqC-HSDURs`;

  fetch(url)
    .then((body) => body.json())
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
});

// app.use(fetchLatest);

module.exports = app;
