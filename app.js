const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
//Middleware
app.use(express.json());

const articlesRouter = require("./routes/articles.route");
const categoriesRouter = require("./routes/categories.route");

app.get("/", (req, res) => {
  res.send("Hello !");
});
app.post("/", (req, res) => {
  res.send("Welcome !");
});

//Database Connexion
mongoose
  .connect(process.env.DATABASECLOUD, {
    // useNewUrlParser: true,
    // useUnifieldTopology: true,
  })
  .then(() => {
    console.log("Datbase Successfully Connected");
  })
  .catch((error) => {
    console.log("Unable to connect to database", error);
    process.exit();
  });

app.use("/api/articles", articlesRouter);
app.use("/api/categories", categoriesRouter);

app.listen(process.env.PORT);
console.log("Apps work with  " + process.env.PORT);
