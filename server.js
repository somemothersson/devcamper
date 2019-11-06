const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

// Route files
const bootcamps = require('./routes/bootcamps')


const app = express();



app.use(logger)
// Mount Routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
