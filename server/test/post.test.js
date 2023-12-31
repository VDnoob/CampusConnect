let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should(); 
chai.use(chaiHttp);

describe('Testing Post Controllers', () => {
  const host = 'http://http://localhost:5173';


  it('Create Post - Valid Input', (done) => {
    chai
      .request(host)
      .post(' /post/createPost')
      .send({
        content: 'Sample post content',
        communityName: 'Sample Community',
        tags: 'tag1, tag2',
        userId: 'sampleUserId',
      })
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if the post is created successfully
        done();
      });
  });

  it('Create Post - Invalid Input', (done) => {
    chai
      .request(host)
      .post(' /post/createPost')
      .send({
        // Missing required fields
      })
      .end((err, res) => {
        res.should.have.status(400);
        // Add assertions to check for error handling when required fields are missing
        done();
      });
  });

  it('Update Post - Valid Input', (done) => {
    chai
      .request(host)
      .put(' /post/updatePost')
      .send({
        postId: 'samplePostId',
        content: 'Updated post content',
      })
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if the post is updated successfully
        done();
      });
  });

  it('Update Post - Invalid Post ID', (done) => {
    chai
      .request(host)
      .put(' /post/updatePost')
      .send({
        // Invalid or non-existent post ID
      })
      .end((err, res) => {
        res.should.have.status(404);
        // Add assertions to check for error handling when post ID is invalid
        done();
      });
  });

  it('Delete Post - Valid Input', (done) => {
    chai
      .request(host)
      .delete(' /post/deletePost')
      .send({
        postId: 'samplePostId',
      })
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if the post is deleted successfully
        done();
      });
  });

  it('Delete Post - Invalid Post ID', (done) => {
    chai
      .request(host)
      .delete(' /post/deletePost')
      .send({
        // Invalid or non-existent post ID
      })
      .end((err, res) => {
        res.should.have.status(404);
        // Add assertions to check for error handling when post ID is invalid
        done();
      });
  });

  it('Get Post Details - Valid Input', (done) => {
    chai
      .request(host)
      .get(' /post/getPostDetails')
      .send({
        postId: 'samplePostId',
      })
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if the post details are fetched successfully
        done();
      });
  });

  it('Get Post Details - Invalid Post ID', (done) => {
    chai
      .request(host)
      .get(' /post/getPostDetails')
      .send({
        // Invalid or non-existent post ID
      })
      .end((err, res) => {
        res.should.have.status(404);
        // Add assertions to check for error handling when post ID is invalid
        done();
      });
  });

  it('Get Posts', (done) => {
    chai
      .request(host)
      .get(' /post/getPosts')
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if posts are fetched successfully
        done();
      });
  });

  // Add more test cases for different scenarios as required
});
