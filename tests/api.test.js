const request = require('supertest');
const express = require('express');
const app = require('../express/api.js');

describe("PUT /asignatura/:iv", function() {
  it('Debería mostrar la asignatura', function (done) {
    request(app)
      .put('/asignatura/iv')
      .expect('Content-Type', /json/)
      .expect(200,done);
  });
});

describe('GET /', function() {
  it('Debería mostrar un mensaje de inicio en json', function(done) {
    request(app).get('/').expect('Content-Type', /json/).expect(200,done);
  });
});

describe('GET /bienvenida', function() {
  it('Debería mostrar un mensaje de bienvenida en json', function(done) {
      request(app).get('/bienvenida').expect('Content-Type', /json/).expect(200,done);
  });
});
