// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let should = chai.should(); 
// chai.use(chaiHttp);

// describe('Testing route company/login', () => {
//   const host = 'http://campusconnectbackend.onrender.com/api/v1';
//   const path = '/auth/login';

//   it('Valid login credentials', (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'vdviradiya23@gmail.com',   
//         password: '12345678', 
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//         done();
//       });
//   });

//   it('Valid login credentials', (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'vdviradiya23@gmail.com',   
//         password: '12345678',
//       })
//       .end((err, res) => {
//         res.should.have.status(200);  
//         done();
//       });
//   });
//   it('Password Not Set', (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'unknown_email@example.com',
//         password: '', 
//       })
//       .end((err, res) => {
//         res.should.have.status(401);  
//         done();
//       });
//   });
//   it('Email Not Set', (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: '', 
//         password: '12234456', 
//       })
//       .end((err, res) => {
//         res.should.have.status(401);  
//         done();
//       });
//   });
// });