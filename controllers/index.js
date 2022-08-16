const express = require("express");
const posts = require("../model/posts");
const router = express.Router();

//show index page and collection of posts

router.get("/", (req, res) => {
  posts
    .findAll({ attributes: ["id", "title", "content"] })
    .then((posts) => {
      res.render("index", {
        postList: JSON.parse(JSON.stringify(posts, null, 2)),
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
