var supertest = require('supertest');
var app = require('../app');
var request = supertest(app);
var should = require('should');

describe('test/app.test.js', function () {
    it('should return "Hello Node!"', function (done) {
        request.get('/')
        .end(function (err, res) {
            res.text.should.equal('Hello Node!');
            done(err);
        });
    });
});
