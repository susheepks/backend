const express = require("express");
const connectdb = require("../connection/connect");
const route = require("../route/route");
const cors = require("cors");
const app = express();
app.use(cors()); //define first
// app.use("/api/tasks", route); //after all connection define this || error

require("dotenv").config();
const port = process.env.PORT;

const start = async () => {
  try {
    await connectdb(process.env.MONGO_URL); // Connect to MongoDB using the connection string from environment variables
    app.listen(port, () => {
      console.log(`server is running ${port}`);
    });
  } catch (error) {
    console.log("db is not coneeected");
  }
};
start();
// hello
