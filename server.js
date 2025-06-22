const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();
const asyncHandler = require("express-async-handler");

const connectDb = require("./config/dbConnection");

connectDb();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running on ${PORT} `);
});
