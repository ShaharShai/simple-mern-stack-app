const mongoose = require("mongoose");
const Person = require("../models/person");

const getAllPeople = () => {
  return Person.find();
};

const getPersonById = (id) => {
  return Person.findById(id);
};

const addPerson = async (obj) => {
  const newPerson = new Person(obj);
  await newPerson.save();
  return "Created !";
};

const updatePerson = async (id, obj) => {
  await Person.findByIdAndUpdate(id, obj);
  return "Updated !";
};

const removePerson = async (id) => {
  await Person.findByIdAndRemove(id);
  return "Removed !";
};

module.exports = {
  getAllPeople,
  getPersonById,
  addPerson,
  updatePerson,
  removePerson,
};
