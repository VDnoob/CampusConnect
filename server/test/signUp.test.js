// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let should = chai.should(); 
// chai.use(chaiHttp);

// describe('Testing route company/login', () => {
//   const host = 'http://campusconnectbackend.onrender.com/api/v1';
//   const path = '/auth/signup';

//   it('Valid SignUp credentials', (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         firstName : 'Arth',
//         lastName : 'Shah',
//         email : 'arth123shah@gmail.com',
//         password : 'Art@22#154',
//         confirmPassword : 'Art@22#154',
//         accountType : 'Student' ,
//         otp : '110523',
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//         done();
//       });
//   });
// });