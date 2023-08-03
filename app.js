const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

// ENV FILE
const PORT = process.env.PORT || 2001;
const DB_URL = process.env.DB_CONNECTION_STRING;


// middleware
app.use(cors())
app.use(express.json())

// Mongoose Connection
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );
} catch (e) {
    console.log("could not connect");
    process.exit(1);
};


// using ejs
app.set("view engine","ejs");


// creating server
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});

