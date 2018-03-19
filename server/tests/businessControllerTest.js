import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../app';
import businesses from '../models/businesses';


chai.use(chaiHttp);
const { expect } = chai;
// test for register business route
describe('POST businesses/', () => {
  it('should be able to register a business', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        name: 'tradby',
        image: 'andela.jpg',
        description: 'a software development company changing the face of africa',
        category: 'ICT',
        location: 'lagos',
        email: 'andela@andela.com',
      })
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
// test for update business route
describe('PUT businesses/', () => {
  it('Should update existing business', (done) => {
    chai.request(app)
      .put('/api/v1/businesses/2')
      .send({
        name: 'Rottenberg',
        description: 'Software company',
        category: 'ICT',
        location: 'lagos',
        email: 'guyt@gmail.com'
      })
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Updated Successfully');
        expect(res.status).to.equal(202);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});
// test for Delete Business route
describe('DELETE businesses/', () => {
  it('should be able to delete a business', (done) => {
    chai.request(app)
      .delete('/api/v1/businesses/2')
      .end((err, res) => {
        expect(res)
          .to.have.status(200);
        done();
      });
  });
  it('should return 404 if page cannot be found', (done) => {
    chai.request(app)
      .delete('/api/v1/businesses/6')
      .end((err, res) => {
        expect(res)
          .to.have.status(404);
        done();
      });
  });
});
