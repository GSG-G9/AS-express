const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const router = require('./controllers');

const app = express();
const env = require('env2')('./.env');

app.set('port', process.env.PORT || 1234);
app.use(compression());
app.use(express.static('public'), { maxAge: '30d' });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

// app.use(fetchLatest);

module.exports = app;
