const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should(); 
chai.use(chaiHttp);

describe('Testing route company/posts', () => {
    let authToken = ''; // Variable to store the authentication token
    const host = 'http://campusconnectbackend.onrender.com/api/v1';
    before((done) => {
      // Perform login and store the authentication token for subsequent requests
      chai
        .request(host)
        .post(path)
        .send({
          email: 'vdviradiya23@gmail.com',
          password: '12345678',
        })
        .end((err, res) => {
          authToken = res.body.token; // Assuming the token is returned in the response body
          res.should.have.status(200);
          done();
        });
    });
  
    it('Create a post after successful login', (done) => {
      const postPath = '/auth/post'; // Replace with your post creation endpoint
      chai
        .request(host)
        .post(postPath)
        .set('Authorization', `Bearer ${authToken}`) // Set the Authorization header with the obtained token
        .send({
          content: 'Test content',
          communityName: 'Test Community',
          tags: 'tag1,tag2',
        })
        .end((err, res) => {
          res.should.have.status(200);
          // Add more assertions based on your response structure if needed
          // Ensure to assert the behavior according to the successful post creation.
          done();
        });
    });
  
    // Add more test cases for various scenarios related to post creation after login
  });
  
