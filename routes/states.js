const router = require('express').Router();
const stController = require("../controllers/states.js");
const validate = require("../validation/validate.js")
const Util = require("../utilities/index.js")


//view all states
router.get("/", stController.getAllStates);

//get one states
router.get("/:id", stController.getState);

//create a states
router.post('/', Util.isLoggedIn, validate.stateRules(), validate.checkData, stController.createState);

//update a states
router.put('/:id', Util.isLoggedIn, validate.stateRules(), validate.checkData, stController.updateState);

//delete a states
router.delete('/:id', Util.isLoggedIn, stController.deleteState);

module.exports = router;