import businesses from '../models/businesses';

const errorMessage = (res, message) => res.status(400).json({
  message,
  error: true
});

const successMessage = (res, message) => res.status(200).json({
  message,
  error: false
});

/**
 * @class ValidateBusiness
 */
class ValidateBusiness {
  /**
   * @returns {Object} query
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static registerBusinessValidator(req, res, next) {
    req.check('business_name', 'Business name is required').notEmpty();
    req.check('category', 'Category is required').notEmpty();
    req.check('email', 'Email is required').notEmpty();
    req.check('email', 'Email is not valid').isEmail();
    req.check('location', 'Location is required').notEmpty();
    req.check('description', 'Description is required').notEmpty();
    const errors = req.validationErrors();
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  }
}
export default ValidateBusiness;
