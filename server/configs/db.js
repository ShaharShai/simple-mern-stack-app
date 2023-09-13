const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/peopleDB")
    .then(() => console.log("Connected to Database !"))
    .catch((err) =>
      console.log(`Error connecting to Database: ${err.message}`)
    );
};

module.exports = connectDB;
