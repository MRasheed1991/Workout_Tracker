const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const viewRoutes = require("./routes/view/index");
const apiRoutes = require("./routes/api/index");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout_tracker", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
//*******routes TO DO **********
app.use(viewRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`app is listening ${PORT}`);
});
