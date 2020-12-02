const router = require('express').Router();
const { request } = require('express');
const { getLatestNews, categorizedNews } = require('./latest');
const { searchForNews } = require('./search');

router.get('/latest-news', getLatestNews);
router.get('/news', searchForNews);
router.get('/categorized-news', categorizedNews);
module.exports = router;
