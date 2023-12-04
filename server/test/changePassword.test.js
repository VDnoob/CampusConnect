let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should(); 
chai.use(chaiHttp);

describe('Testing route company/changePassword', () => {
  const host = 'http://http://localhost:5173';
  const path = '/auth/changePassword';

  it('Valid change password', (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        email: 'johndoe@example.com',
        oldPassword: 'oldpassword',
        newPassword: 'newpassword',
        confirmNewPassword: 'newpassword',
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Invalid change password (missing required fields)', (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        email: 'johndoe@example.com',
        oldPassword: 'oldpassword',
        newPassword: 'newpassword',
      })
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
});
