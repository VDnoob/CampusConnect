let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should(); 
chai.use(chaiHttp);

describe('Testing Reset Password Functionality', () => {
  const host = 'http://http://localhost:5173';
  it('Reset Password Token - Valid Email', (done) => {
    chai
      .request(host)
      .post(' /resetPassword/resetPasswordToken')
      .send({
        email: 'sample@email.com',
      })
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if the reset password token is sent successfully
        done();
      });
  });

  it('Reset Password Token - Invalid Email', (done) => {
    chai
      .request(host)
      .post(' /resetPassword/resetPasswordToken')
      .send({
        // Invalid or non-existent email
      })
      .end((err, res) => {
        res.should.have.status(400);
        // Add assertions to check for error handling when email is invalid
        done();
      });
  });

  it('Reset Password - Valid Input', (done) => {
    chai
      .request(host)
      .post(' /resetPassword/resetPassword')
      .send({
        newPassword: 'newPassword123',
        token: 'sampleToken',
        newConfirmPassword: 'newPassword123',
      })
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if the password is reset successfully
        done();
      });
  });

  it('Reset Password - Invalid Token', (done) => {
    chai
      .request(host)
      .post(' /resetPassword/resetPassword')
      .send({
        // Invalid or non-existent token
      })
      .end((err, res) => {
        res.should.have.status(400);
        // Add assertions to check for error handling when token is invalid
        done();
      });
  });

  it('Reset Password - Expired Token', (done) => {
    chai
      .request(host)
      .post(' /resetPassword/resetPassword')
      .send({
        // Pass an expired token
      })
      .end((err, res) => {
        res.should.have.status(400);
        // Add assertions to check for error handling when token is expired
        done();
      });
  });

  // Add more test cases for different scenarios as required
});
