const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const userRoutes = require('./routes/user');

app.use(userRoutes);


sequelize
  .sync()
  .then((result) => {
    //{force:true}
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
