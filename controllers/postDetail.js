const express = require("express");
const posts = require("../model/posts");
const router = express.Router();

//show post details. If post route does not exist show error

router.get("/posts/:id", (req, res) => {
  posts.findByPk(req.params.id).then((post) => {
    if (post) {
      res.render("post", {
        title: post.dataValues.title,
        content: post.dataValues.content,
      });
    } else {
      res.send("post not found");
    }
  });
});

module.exports = router;
