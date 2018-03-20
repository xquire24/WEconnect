import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../app';

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

//  Get all businesses
describe('GET businesses/', () => {
  it('should get all businesses', (done) => {
    chai.request(app)
      .get('/api/v1/businesses')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});

// Get a business
describe('GET business by id/', () => {
  it('Should get a business', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/1')
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        expect(res.status).to.equal(200);
        done();
      });
  });
});

describe('GET business reviews/', () => {
  it('it should GET all reviews for a business', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/1/reviews')
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('Reviews');
        expect(res.status).to.equal(200);
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
// test for POST business review
describe('POST business reviews/', () => {
  it('Should successfully add review', (done) => {
    const reviewMessage = {
      name: 'charles',
      review: 'Nice work guys',
    };
    chai.request(app)
      .post('/api/v1/businesses/1/reviews')
      .send(reviewMessage)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.message).equal('Review sucessfully added');
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('should return error for a business that does not exist', (done) => {
    const review = {
      name: 'jones',
      review: 'You can do better',
    };
    chai.request(app)
      .post('/api/v1/businesses/2/reviews')
      .send(review)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('error');
        done();
      });
  });
});

