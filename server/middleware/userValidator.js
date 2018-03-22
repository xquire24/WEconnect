
const errorMessage = (res, message) => res.status(400).json({
  message,
  error: true
});
/**
 *
 *
 * @class ValidateUser
 */
class ValidateUser {
  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @param {any} next
   * @returns {object} userSignup
   */
  static userSignup(req, res, next) {
    req.check('username', 'Username is required').notEmpty();
    req.check('email', 'Use a valid email').isEmail();
    req.check('password', 'A minimum of 6 characters is required').isLength({ min: 6 });

    const error = req.validationErrors();
    if (error) {
      return errorMessage(res, error[0].msg);
    }
    next();
  }
  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @param {any} next
   * @returns {object} userLogin
   */
  static userLogin(req, res, next) {
    req.check('email', 'Email field is required').isEmpty();
    req.check('email', 'Email is invalid').isEmail();
    req.check('password', 'A minimum of 6 characters is required').isLength({ min: 6 });

    const error = req.validationErrors();
    if (error) {
      return errorMessage(res, error[0].msg);
    }
    next();
  }
}
export default ValidateUser;
