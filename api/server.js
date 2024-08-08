const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const controls = require("./database/controllers/controller.js");
const db = require("./database/models");
var mainRoute = require("./database/routes/main");

var app = express();

var corsOptions = {
  // Local
  //origin: "http://localhost:3000"
  //Docker
  origin: "http://54.208.14.126:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use('/', mainRoute);


// set port, listen for requests
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
