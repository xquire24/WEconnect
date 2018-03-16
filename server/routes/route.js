import Business from '../controller/businessController';
import ValidateBusiness from '../middleware/businessValidator';

export default (app) => {
  // Business API endpoints
  app.post('/api/v1/businesses', ValidateBusiness.registerBusinessValidator, Business.registerBusiness);
};

