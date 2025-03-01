// test.js
const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    it('debería responder con un mensaje de saludo', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hola, estamos en Node')
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});