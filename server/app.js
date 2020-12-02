require('env2')('./.env');
const express = require('express');
const path = require('path');
const compression = require('compression');
const router = require('./controllers');

const app = express();

app.set('port', process.env.PORT || 1234);
app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(router);

module.exports = app;
