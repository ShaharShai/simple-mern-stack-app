const mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  {
    versionKey: false,
  }
);

const Person = mongoose.model('person', personSchema);

module.exports = Person