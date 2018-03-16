import businesses from '../models/businesses';
/**
 * @class Business
*/
class Business {
/**
   * @returns {Object} registerBusiness
   * @param {*} req
   * @param {*} res
   */
  static registerBusiness(req, res) {
    businesses.push({
      id: businesses.length + 1,
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      location: req.body.location,
    });
    return res.json({
      message: 'Registered Successfully',
      error: false
    });
  }
}
export default Business;
