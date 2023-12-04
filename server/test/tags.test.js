let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should(); 
chai.use(chaiHttp);

describe('Testing Tag Functionality', () => {
  const host = 'http://http://localhost:5173';

  it('Create Tag - Valid Tag', (done) => {
    chai
      .request(host)
      .post('/tags/createTag')
      .send({
        tagName: 'NewTag',
      })
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if the tag is created successfully
        done();
      });
  });

  it('Create Tag - Existing Tag', (done) => {
    chai
      .request(host)
      .post('/tags/createTag')
      .send({
        tagName: 'ExistingTag',
      })
      .end((err, res) => {
        res.should.have.status(400);
        // Add assertions to check for error handling when creating an existing tag
        done();
      });
  });

  it('Get All Tags', (done) => {
    chai
      .request(host)
      .get('/tags/getAllTags')
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if all tags are fetched successfully
        done();
      });
  });

  it('Get Tag Details - Existing Tag', (done) => {
    chai
      .request(host)
      .get('/tags/getTagDetails')
      .send({
        tag: 'ExistingTag',
      })
      .end((err, res) => {
        res.should.have.status(200);
        // Add assertions to check if tag details are fetched successfully for an existing tag
        done();
      });
  });

  it('Get Tag Details - Non-Existent Tag', (done) => {
    chai
      .request(host)
      .get('/tags/getTagDetails')
      .send({
        tag: 'NonExistentTag',
      })
      .end((err, res) => {
        res.should.have.status(404);
        // Add assertions to check for error handling when fetching details for a non-existent tag
        done();
      });
  });

  // Add more test cases as necessary to cover edge cases and different scenarios
});
