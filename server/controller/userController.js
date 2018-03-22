import users from '../models/users';


/**
 * @class User
*/
class User {
  /**
   * @returns {Object} registerUser
   * @param {*} req
   * @param {*} res
   */
  static registerUser(req, res) {
    users.push({
      id: users.length + 1,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    return res.json({
      message: 'Registered Successfully',
      error: false
    });
  }
}
export default User;
