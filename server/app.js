
const express = require("express");
const path = require("path");
require('dotenv').config();
var cors = require('cors')

//Routes
const authRouter = require("./routes/auth.js")
const codeIntake = require("./routes/codeIntake")

var isprod = process.env.NODE_ENV === "production";

const startServer = async () => {
  const app = express();
  app.use(cors())
  //Json Middleware
  app.use(express.json());

  //Routes Middle Ware
  app.use("/login", authRouter);
  app.use("/codeintake", codeIntake)

  console.log(`NODE_ENV=${process.env.NODE_ENV}`);

  app.listen(process.env.PORT, () => {
    console.log(`Spun up on ${process.env.PORT}`);
    if (isprod == false) console.log("running in dev mode");
  });
  //dbconnect.dbconnect();
};

startServer();
