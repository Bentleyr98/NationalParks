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

validate.nationalParkRules = () => {
    return [
      // firstname is required and must be string
      body("classification_name")
        .trim()
        .escape()
        .isLength({ min: 3 })
        .withMessage("Please provide a valid classification.")
        .custom(async (classification_name) => {
            const classExists = await invModel.checkExistingClassification(classification_name)
            if (classExists){
              throw new Error("Classification already exists.")
            }
          })
    ]
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
