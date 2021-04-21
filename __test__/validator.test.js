'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('VALIDATOR TEST', () => {

  it('should respond of 500', async () => {
    return mockRequest.get('/person').then(data => {
      expect(data.status).toEqual(500);
    })
  });

  it('should respond properly to a GET: /person', async () => {
    const response = await mockRequest.get('/person?name=Jessi');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Jessi');
  })

});
