const express = require("express");
const path = require("path");
require("dotenv").config();
const index = require("./controllers/index");
const postDetail = require("./controllers/postDetail");
const posts = require("./model/posts");

const app = express();

//set template engine
app.set("view engine", "ejs");

//static folder
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use(index);
app.use(postDetail);
app.get("/about", (req, res) => {
  res.render("about");
});

// 404 error
app.use((req, res) => {
  res.status(404).send("page not found");
});

//sync database and start server
posts
  .sync()
  .then(() => {
    app.listen(3000);
    console.log("app started succesfully");
  })
  .catch((err) => console.log(err));
