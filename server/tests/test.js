import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../app';

const Business = {
  name: 'Andel',
  description: 'a software development company changing the face of africa',
  category: 'ICT',
  location: 'lagos',
  email: 'andelare@andela.com',
};

chai.use(chaiHttp);
const { expect } = chai;
// test for app API
describe('apiApp testing', () => {
  // For Homepage route
  it('Should return an Ok status code of 200', (done) => {
    chai.request(app)
      .get('/api/v1')
      .end((err, res) => {
        expect(res.body).to.have.property('message');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });
  // For the default route
  it('Should return an Ok status code of 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.body).to.have.property('message');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});

// test for register business route and middle ware
describe('POST businesses/', () => {
  it('should be able to register a business', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send(Business)
      .end((err, res) => {
        expect(res)
          .to.have.status(201);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });

  it('should return 400 if no business name', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        description: 'Best Ict Resources',
        location: 'lagos',
        category: 'ICT',
        email: 'xquireworld@gmail.com',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(400);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });
});
