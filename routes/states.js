const router = require('express').Router();
const stController = require("../controllers/states.js");


//view all states
router.get("/", stController.getAllStates);

//get one states
router.get("/:id", stController.getState);

//create a states
router.post('/', stController.createState);

//update a states
router.put('/:id', stController.updateState);

//delete a states
router.delete('/:id', stController.deleteState);

module.exports = router;