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
      email: req.body.email,
    });
    return res.status(201).json({
      message: 'Registered Successfully',
      error: false
    });
  }
  /**
   * @returns {Object} updateBusiness
   * @param {*} req
   * @param {*} res
   */
  static updateBusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        businesses[i].name = req.body.name;
        businesses[i].description = req.body.description;
        businesses[i].location = req.body.location;
        businesses[i].category = req.body.category;
        businesses[i].email = req.body.email;
        return res.json({
          message: 'Updated Successfully',
          error: false
        });
      }
    }
    return res.status(400).json({
      message: 'Business not found',
      error: true
    });
  }
}
export default Business;
