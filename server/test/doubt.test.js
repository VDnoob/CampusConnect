let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should(); 
chai.use(chaiHttp);

describe('Testing Doubt Controllers', () => {
  const host = 'http://http://localhost:5173';

  it('Create Doubt - Valid Input', (done) => {
    chai
      .request(host)
      .post(' /doubt/createDoubt')
      .send({
        content: 'Sample doubt content',
        communityName: 'Sample Community',
        tags: 'tag1, tag2',
        userId: 'sampleUserId',
      })
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if the doubt is created successfully
        done();
      });
  });

  it('Create Doubt - Invalid Input', (done) => {
    chai
      .request(host)
      .post(' /doubt/createDoubt')
      .send({
        // Missing required fields
      })
      .end((err, res) => {
        res.should.have.status(400);
        // Add assertions to check for error handling when required fields are missing
        done();
      });
  });

  it('Update Doubt - Valid Input', (done) => {
    chai
      .request(host)
      .put(' /doubt/updateDoubt')
      .send({
        doubtId: 'sampleDoubtId',
        content: 'Updated doubt content',
      })
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if the doubt is updated successfully
        done();
      });
  });

  it('Update Doubt - Invalid Doubt ID', (done) => {
    chai
      .request(host)
      .put(' /doubt/updateDoubt')
      .send({
        // Invalid or non-existent doubt ID
      })
      .end((err, res) => {
        res.should.have.status(404);
        // Add assertions to check for error handling when doubt ID is invalid
        done();
      });
  });

  it('Delete Doubt - Valid Input', (done) => {
    chai
      .request(host)
      .delete(' /doubt/deleteDoubt')
      .send({
        doubtId: 'sampleDoubtId',
      })
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if the doubt is deleted successfully
        done();
      });
  });

  it('Delete Doubt - Invalid Doubt ID', (done) => {
    chai
      .request(host)
      .delete(' /doubt/deleteDoubt')
      .send({
        // Invalid or non-existent doubt ID
      })
      .end((err, res) => {
        res.should.have.status(404);
        // Add assertions to check for error handling when doubt ID is invalid
        done();
      });
  });

  it('Get Doubt Details - Valid Input', (done) => {
    chai
      .request(host)
      .get(' /doubt/getDoubtDetails')
      .send({
        doubtId: 'sampleDoubtId',
      })
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if the doubt details are fetched successfully
        done();
      });
  });

  it('Get Doubt Details - Invalid Doubt ID', (done) => {
    chai
      .request(host)
      .get(' /doubt/getDoubtDetails')
      .send({
        // Invalid or non-existent doubt ID
      })
      .end((err, res) => {
        res.should.have.status(404);
        // Add assertions to check for error handling when doubt ID is invalid
        done();
      });
  });

  it('Get Doubts', (done) => {
    chai
      .request(host)
      .get(' /doubt/getDoubts')
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if doubts are fetched successfully
        done();
      });
  });

  // Add more test cases for different scenarios as required
});
