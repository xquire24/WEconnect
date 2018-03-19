import businesses from '../models/businesses';

const errorMessage = (res, message) => res.status(400).json({
  message,
  error: true
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
    req.check('name', 'Business name is required').notEmpty();
    req.check('description', 'Description is required').notEmpty();
    req.check('category', 'Category is required').notEmpty();
    req.check('location', 'Location is required').notEmpty();
    req.check('email', 'Email is required').notEmpty();
    req.check('email', 'Email is not valid').isEmail();
    const errors = req.validationErrors();
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  }
  /**
   * @returns {Object} query
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static updateBusinessValidator(req, res, next) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        req.check('name', 'Business name is required').notEmpty();
        req.check('description', 'Description is required').notEmpty();
        req.check('category', 'Category is required').notEmpty();
        req.check('location', 'Location is required').notEmpty();
        req.check('email', 'Email is required').notEmpty();
        req.check('email', 'Email is not valid').isEmail();
        const errors = req.validationErrors();
        if (errors) { return errorMessage(res, errors[0].msg); }
      }
    }
    next();
  }
  /**
   * @returns {Object} query
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static businessReviewValidator(req, res, next) {
    req.check('name', 'Name is required').notEmpty();
    req.check('review', 'Review is required').notEmpty();
    const errors = req.validationErrors();
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  }
}

export default ValidateBusiness;
