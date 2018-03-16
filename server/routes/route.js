import Business from '../controller/businessController';

export default (app) => {
  // Business API endpoints
  app.post('/api/v1/businesses', Business.registerBusiness);
};

