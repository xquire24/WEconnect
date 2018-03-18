import Business from '../controller/businessController';
import ValidateBusiness from '../middleware/businessValidator';

export default (app) => {
  // Business API endpoints
  app.post('/api/v1/businesses', ValidateBusiness.registerBusinessValidator, Business.registerBusiness);
  app.put('/api/v1/businesses/:businessId', ValidateBusiness.registerBusinessValidator, Business.updateBusiness);
};

