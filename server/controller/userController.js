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
    return res.status(201).json({
      message: 'Registered Successfully',
      error: false
    });
  }
  /**
   * @returns {Object} loginUser
   * @param {*} req
   * @param {*} res
   */
  static loginUser(req, res) {
    const { email, password } = req.body;
    users.forEach((user) => {
      if (
        email === user.email && password === user.password
      ) {
        return res.status(200).json({
          message: 'Login successfull',
          error: false
        });
      }
    });
    res.status(400).json({
      message: 'Error logining in',
      error: true
    });
  }
}
export default User;
