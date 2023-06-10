const { body, validationResult } = require("express-validator")
const validate = {}


// Check data and return errors or continue to login
validate.checkData = async (req, res, next) => {
  let errors = []
  errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.send(500);
  }
  next()
  }


  validate.stateRules = () => {
    return [
      // valid state is required
      body("name")
      .trim()
      .escape()
      .isLength({ min: 4 })
      .withMessage("A valid state is required."),

      // valid national parks are required
      body("nationalParks")
      .trim()
      .escape()
      .isLength({ min: 1 })
      .withMessage("A valid national park is required.")
    ]
  }

  validate.nationalParkRules = () => {
    return [
      // valid state is required
      body("name")
      .trim()
      .escape()
      .isLength({ min: 4 })
      .withMessage("A valid state is required."),

      // valid national parks are required
      body("nationalParks")
      .trim()
      .escape()
      .isLength({ min: 1 })
      .withMessage("A valid national park is required.")
    ]
  }


  
  module.exports = validate;
