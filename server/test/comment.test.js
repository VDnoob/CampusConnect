// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const should = chai.should(); 
// chai.use(chaiHttp);

// describe('Testing Comment Controller', () => {
//   const host = 'http://campusconnectbackend.onrender.com/api/v1'; // Replace with your actual backend URL
//   const path = '/comment/create'; // Replace with your comment creation endpoint

//   it('Create a comment with valid postId and content', (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         postId: '6564afb4e6ce4b0f4f2d07a6', // Replace with an existing post ID
//         content: 'Hello World', // Add test comment content
//       })
//       .end((err, res) => {
//         res.should.have.status(201);
//         // Add assertions for the response body or data if needed
//         done();
//       });
//   });
// });

// //   it('Attempt to create a comment without providing postId', (done) => {
// //     chai
// //       .request(host)
// //       .post(path)
// //       .send({
// //         // Omitting postId intentionally to trigger the validation error
// //         content: 'Test comment without postId.',
// //       })
// //       .end((err, res) => {
// //         res.should.have.status(400);
// //         // Add assertions for the response body or message if needed
// //         done();
// //       });
// //   });

// //   it('Attempt to create a comment without providing content', (done) => {
// //     chai
// //       .request(host)
// //       .post(path)
// //       .send({
// //         postId: '6563b23e7670168ccc64d700', // Replace with an existing post ID
// //         // Omitting content intentionally to trigger the validation error
// //       })
// //       .end((err, res) => {
// //         res.should.have.status(400);
// //         // Add assertions for the response body or message if needed
// //         done();
// //       });
// //   });

// //   it('Attempt to create a comment for a non-existing post', (done) => {
// //     chai
// //       .request(host)
// //       .post(path)
// //       .send({
// //         postId: '6563b23e7670168ccc64d701', 
// //         content: 'Test comment for non-existing post.',
// //       })
// //       .end((err, res) => {
// //         res.should.have.status(404);
// //         done();
// //       });
// //   });
