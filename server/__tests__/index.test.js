const request = require('supertest');
const app = require('../app');

test('Testing the root end point', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('content-type', /html/)
    .end(function (err, res) {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);

      done();
    });
});

test('test latest news', (done) => {
  request(app)
    .get('/latest-news')
    .expect(200)
    .expect('content-type', /json/)
    .end(function (err, res) {
      if (err) return done(err);
      console.log(res.body[0]);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual('ok');
      done();
    });
});
