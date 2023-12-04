let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should(); 
chai.use(chaiHttp);

describe('Testing Answer Controllers', () => {
  const host = 'http://http://localhost:5173';

  it('Create Answer - Valid Input', (done) => {
    chai
      .request(host)
      .post(' /answer/createAnswer')
      .send({
        doubtId: 'doubtId', // Replace with a valid doubt ID
        content: 'Answer content',
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });

  it('Create Answer - Invalid Input', (done) => {
    chai
      .request(host)
      .post(' /answer/createAnswer')
      .send({
        // Missing required fields
      })
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it('Update Answer - Valid Input', (done) => {
    chai
      .request(host)
      .put(' /answer/updateAnswer')
      .send({
        answerId: 'answerId', // Replace with a valid answer ID
        content: 'Updated answer content',
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Update Answer - Invalid Answer ID', (done) => {
    chai
      .request(host)
      .put(' /answer/updateAnswer')
      .send({
        // Invalid or non-existent answer ID
      })
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('Delete Answer - Valid Input', (done) => {
    chai
      .request(host)
      .delete(' /answer/deleteAnswer')
      .send({
        answerId: 'answerId', // Replace with a valid answer ID
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Delete Answer - Invalid Answer ID', (done) => {
    chai
      .request(host)
      .delete(' /answer/deleteAnswer')
      .send({
        // Invalid or non-existent answer ID
      })
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('Mark Correct Answer - Valid Input', (done) => {
    chai
      .request(host)
      .put(' /answer/markCorrectAnswer')
      .send({
        answerId: 'answerId', // Replace with a valid answer ID
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Unmark Correct Answer - Valid Input', (done) => {
    chai
      .request(host)
      .put(' /answer/unmarkCorrectAnswer')
      .send({
        answerId: 'answerId', // Replace with a valid answer ID
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Mark Correct Answer - Invalid Answer ID', (done) => {
    chai
      .request(host)
      .put(' /answer/markCorrectAnswer')
      .send({
        // Invalid or non-existent answer ID
      })
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('Unmark Correct Answer - Invalid Answer ID', (done) => {
    chai
      .request(host)
      .put(' /answer/unmarkCorrectAnswer')
      .send({
        // Invalid or non-existent answer ID
      })
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  // Add more test cases for different scenarios as required
});
