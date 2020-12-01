const express = require('express');
const app = express();
const env = require('env2')('./.env');

app.set('port', process.env.PORT || 1234);


module.exports = app;
