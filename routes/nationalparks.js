const router = require('express').Router();
const npController = require("../controllers/nationalPark.js");


//view all National Parks
router.get("/", npController.getAllNationalParks);

//get one National Park
router.get("/:id", npController.getNationalPark);

//create a National Park
router.post('/', npController.createNationalPark);

//update a National Park
router.put('/:id', npController.updateNationalPark);

//delete a National Park
router.delete('/:id', npController.deleteNationalPark);

module.exports = router;