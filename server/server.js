require('dotenv').config();
const cors = require("cors")
const express = require("express");
const router = require("./routes/index");
const connectDb = require("./config/db");
const app = express();

app.use(cors())
app.use(express.json());
app.use(router);

//global error handler
app.use((err, req, res, next) => {
  console.log(err);

  const message = err.message ? err.message : "Server error occurred";
  const status = err.status ? err.status : 500;
  res.status(status).json({ message });
});

// Database connection

connectDb(process.env.MONGO_STRING)
  .then(() => {
    console.log("Database connected successfully");

    app.listen(process.env.PORT || 8080, () => {
      console.log("App is running at port 8080");
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
