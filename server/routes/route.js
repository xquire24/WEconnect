import Business from '../controller/businessController';
import ValidateBusiness from '../middleware/businessValidator';
import User from '../controller/userController';
import ValidateUser from '../middleware/userValidator';


export default (app) => {
  // User API endpoints
  app.post('/api/v1/auth/signup', ValidateUser.userSignup, User.registerUser);
  app.post('/api/v1/auth/login', ValidateUser.userLogin, User.loginUser);
  // Business API endpoints
  app.post('/api/v1/businesses', ValidateBusiness.registerBusinessValidator, Business.registerBusiness);
  app.put('/api/v1/businesses/:businessId', ValidateBusiness.updateBusinessValidator, Business.updateBusiness);
  app.delete('/api/v1/businesses/:businessId', Business.removeBusiness);
  app.post('/api/v1/businesses/:businessid/reviews', ValidateBusiness.businessReviewValidator, Business.addBusinessReview);
  app.get('/api/v1/businesses/:businessId/reviews', Business.getBusinessReview);
  app.get('/api/v1/businesses', ValidateBusiness.queryBusinessByLocationOrCategory, Business.getBusinesses);
  app.get('/api/v1/businesses/:businessId', Business.getBusinessesById);
};

