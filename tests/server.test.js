const expect = require('expect');
const request = require('supertest');
const ip = require('ip');
const { app } = require('../server');

describe('GET /api/whoami', () => {
  it('should return information about the client', (done) => {
    request(app)
      .get('/api/whoami')
      .expect(200)
      .expect((res) => {
        const isPublicIp = ip.isPublic(res.body.ipaddress);
        const isV4Format = ip.isV4Format(res.body.ipaddress);
        expect(isPublicIp).toBeTruthy();
        expect(isV4Format).toBeTruthy();
      })
      .end(done);
  });
});
