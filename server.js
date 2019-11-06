const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require('./config/db')

// Load env vars
dotenv.config({ path: ".env" });

// Load MongoDb
connectDB()

// Route files
const bootcamps = require("./routes/bootcamps");

const app = express();

// Dev Logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT;

// Server listening
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
