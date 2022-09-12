const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const dotenv = require("dotenv");
const booksRoute = require("./routes/books.js");
const articlesRoute = require("./routes/articles.js");

app.use(cors());
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });
app.use(bodyParser.json());

app.use("/api/books", booksRoute)
app.use("/api/articles", articlesRoute)

app.listen(4040, () => {
    console.log("Backend server is running!");
});