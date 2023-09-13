const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const peopleRouter = require("./Routers/peopleRouter")

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/people', peopleRouter)

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
