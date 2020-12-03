const router = require('express').Router();
const { request } = require('express');
const { getLatestNews, categorizedNews } = require('./latest');
const { searchForNews } = require('./search');
const { clientError, serverError } = require('./errors');

router.get('/latest-news', getLatestNews);
router.get('/news', searchForNews);
router.get('/categorized-news', categorizedNews);
router.use(clientError);
router.use(serverError);
module.exports = router;
