const mongodb = require("../database/db");
const ObjectId = require("mongodb").ObjectId;


const getAllStates = async (req, res, next) => {
  try{
    const result = await mongodb.getDb().db().collection("states").find();
    result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
  }catch(error){res.status(500)
    .json(
      response.error || "Some error occurred while getting all the states."
    );}
  
};

const getState = async (req, res, next) => {
  try{
    const statesId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection("states")
    .find({ _id: statesId });

  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
  } catch(error){res.status(500)
    .json(
      response.error || "Some error occurred while getting the state."
    );}
};

const createState = async (req, res) => {
  try{
    const state = {
      name: req.body.name,
      nationalParks: req.body.nationalParks
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection("states")
      .insertOne(state);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while creating the state."
        );
    }

  } catch(error){res.status(500)
    .json(
      response.error || "Some error occurred while creating the state."
    );}
};

const updateState = async (req, res, next) => {
  try{
    const statesId = new ObjectId(req.params.id);
  const state = {
    name: req.body.name,
    nationalParks: req.body.nationalParks
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection("states")
    .replaceOne({ _id: statesId }, state);
  console.log(response);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while updating the state."
      );
  }
  } catch(error){res.status(500)
    .json(
      response.error || "Some error occurred while updating the state."
    );}
};

const deleteState = async (req, res, next) => {
  try{
    const statesId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection("states")
    .deleteOne({ _id: statesId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while deleting the state."
      );
  }

  } catch(error){res.status(500)
    .json(
      response.error || "Some error occurred while deleting the state."
    );}
};

module.exports = {
  getAllStates,
  getState,
  createState,
  updateState,
  deleteState,
};