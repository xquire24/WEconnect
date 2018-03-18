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
// test for register business route
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

  it('should return 400 if no email', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        name: 'tradby',
        description: 'Best Ict Resources',
        location: 'lagos',
        category: 'ICT',
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
