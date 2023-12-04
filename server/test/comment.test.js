let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should(); 
chai.use(chaiHttp);

describe('Testing Comment Controllers', () => {
  const host = 'http://http://localhost:5173';

  it('Create Comment - Valid Input', (done) => {
    chai
      .request(host)
      .post(' /comment/createComment')
      .send({
        postId: 'postId', // Replace with a valid post ID
        content: 'Comment content',
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });

  it('Create Comment - Invalid Input', (done) => {
    chai
      .request(host)
      .post(' /comment/createComment')
      .send({
        // Missing required fields
      })
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it('Update Comment - Valid Input', (done) => {
    chai
      .request(host)
      .put(' /comment/updateComment')
      .send({
        commentId: 'commentId', // Replace with a valid comment ID
        content: 'Updated comment content',
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Update Comment - Invalid Comment ID', (done) => {
    chai
      .request(host)
      .put(' /comment/updateComment')
      .send({
        // Invalid or non-existent comment ID
      })
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('Delete Comment - Valid Input', (done) => {
    chai
      .request(host)
      .delete(' /comment/deleteComment')
      .send({
        commentId: 'commentId', // Replace with a valid comment ID
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Delete Comment - Invalid Comment ID', (done) => {
    chai
      .request(host)
      .delete(' /comment/deleteComment')
      .send({
        // Invalid or non-existent comment ID
      })
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
