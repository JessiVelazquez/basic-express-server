'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('WEB SERVER:', () => {

  it('should respond with a 404 on nnot found', async () => {
    return mockRequest.get('/no-thing').then(data => {
      expect(data.status).toBe(404);
    })
  });

  // it('should respond with a 500 on an error', () => {
  //   expect(true).toBe(true);
  // });

  it('should respond properly to a GET: /hello', async () => {
    const response = await mockRequest.get('/hello');
    expect(response.status).toBe(200);
    expect(response.text).toBe('hello world!');
  });

});