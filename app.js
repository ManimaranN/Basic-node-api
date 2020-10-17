const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const dotenv = require("dotenv");

dotenv.config();

//db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  });

mongoose.connection.on("error", (error) => {
  console.log(`DB conncetion error: ${error}`);
});

//bring routes
const postRoutes = require("./routes/post");

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`A node js application is running on port no:  ${PORT}`);
});
