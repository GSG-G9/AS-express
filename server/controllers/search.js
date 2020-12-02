const fetch = require('node-fetch');

const searchForNews = (req, res) => {
  console.log(req.params.inputVal);
  let url =`https://api.currentsapi.services/v1/search?keywords=${req.params.inputVal}&language=${req.params.inputLanguage}&apiKey=pE2ivILVQvsHP0_nz54Kw7OQB6IvgUiBob10O2FqC-HSDURs`;
  console.log(url);
  fetch(url)
    .then((body) => body.json())
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
};
module.exports = { searchForNews };
