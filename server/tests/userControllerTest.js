import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('POST user signup/', () => {
  it('it should not register a user', (done) => {
    const userDetails = {
      username: 'mark',
      password: 'lenovo'
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(userDetails)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('message').equal('Use a valid email');
        expect(res.body).to.have.property('error');
        done();
      });
  });

  it('it should register a new user', (done) => {
    const userDetails = {
      username: 'mark',
      email: 'careen@gmail.com',
      password: 'lenovo'
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(userDetails)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('message').equal('Registered Successfully');
        expect(res.body).to.have.property('error');
        done();
      });
  });
});
