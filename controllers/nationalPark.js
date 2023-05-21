const mongodb = require("../database/db");
const ObjectId = require("mongodb").ObjectId;


const getAllNationalParks = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection("nationalParks").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const getNationalPark = async (req, res, next) => {
  const parkId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection("nationalParks")
    .find({ _id: parkId });

  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

const createNationalPark = async (req, res) => {
  const park = {
    name: req.body.name,
    location: req.body.location,
    established_date: req.body.established_date,
    area: req.body.area,
    description: req.body.description,
    activities: req.body.activities,
    website: req.body.website
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection("nationalParks")
    .insertOne(park);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while creating the contact."
      );
  }
};

const updateNationalPark = async (req, res, next) => {
  const parkId = new ObjectId(req.params.id);
  const park = {
    name: req.body.name,
    location: req.body.location,
    established_date: req.body.established_date,
    area: req.body.area,
    description: req.body.description,
    activities: req.body.activities,
    website: req.body.website
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection("nationalParks")
    .replaceOne({ _id: parkId }, park);
  console.log(response);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while updating the contact."
      );
  }
};

const deleteNationalPark = async (req, res, next) => {
  const parkId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection("nationalParks")
    .deleteOne({ _id: parkId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while deleting the park."
      );
  }
};

module.exports = {
  getAllNationalParks,
  getNationalPark,
  createNationalPark,
  updateNationalPark,
  deleteNationalPark,
};