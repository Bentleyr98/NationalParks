const router = require('express').Router();
const npController = require("../controllers/nationalPark.js");
const validate = require("../validation/validate.js")
const Util = require("../utilities/index.js")


//view all National Parks
router.get("/", npController.getAllNationalParks);

//get one National Park
router.get("/:id", npController.getNationalPark);

//create a National Park
router.post('/', Util.isLoggedIn, validate.nationalParkRules(), validate.checkData, npController.createNationalPark);

//update a National Park
router.put('/:id', Util.isLoggedIn, validate.nationalParkRules(), validate.checkData, npController.updateNationalPark);

//delete a National Park
router.delete('/:id', Util.isLoggedIn, npController.deleteNationalPark);

module.exports = router;