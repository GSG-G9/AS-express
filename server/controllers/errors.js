const path = require('path');
const clientError = (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
};

const serverError = (err, req, res, next) => {
  res.status(500).sendfile('OOPS, Server has a trouble, Execuse US');
};

module.exports = { clientError, serverError };
