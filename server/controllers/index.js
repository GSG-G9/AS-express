const router = require('express').Router();
const { getLatestNews } = require('./latest');
const { searchForNews } = require('./search');

router.get('/latest-news', getLatestNews);
router.get('/search/:inputVal/:inputLanguage', searchForNews);
module.exports = router;
