let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should(); 
chai.use(chaiHttp);

describe('Testing route company/signup', () => {
  const host = 'http://http://localhost:5173';
  const path = '/auth/signup';

  it('Valid signup', (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123',
        confirmPassword: 'password123',
        otp: '123456',
        accountType: 'user',
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Invalid signup (missing required fields)', (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        firstName: 'John',
        email: 'johndoe@example.com',
        password: 'password123',
        confirmPassword: 'password123',
        otp: '123456', 
        accountType: 'user',
      })
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
});
