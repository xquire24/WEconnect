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
        return res.status(202).json({
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
  /**
   * @returns {Object} removeBusiness
   * @param {*} req
   * @param {*} res
   */
  static removeBusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        businesses.splice(businesses[i], 1);
        return res.status(200).json({
          message: 'Successfully Deleted',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'Business not found',
      error: true
    });
  }
  /**
   * @returns {Object} addBusinessReview
   * @param {*} req
   * @param {*} res
   */
  static addBusinessReview(req, res) {
    const { name, review } = req.body;
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessid, 10)) {
        businesses[i].reviews.push({ name, review });

        return res.status(201).json({
          message: 'Review sucessfully added',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'Business not found',
      error: true
    });
  }
}
export default Business;
