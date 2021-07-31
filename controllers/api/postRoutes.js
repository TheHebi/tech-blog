const express = require("express");
const router = express.Router();
const db = require("../../models");

// get all comments
router.get("/", async (req, res) => {
  try {
    const posts = await db.Post.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get comment by id
router.get("/:id", async (req, res) => {
  try {
    const post = await db.Post.findOne({
      where: { id: req.params.id },
      include: {model: db.Comment, attributes: { exclude: [`createdAt`, `updatedAt`] },},
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// post comment
router.post("/", async (req, res) => {
  try {
    const newComment = await db.Post.create(req.body);
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete comment
router.delete("/:id", (req, res) => {
  if (db.Post.user_id === req.session.user.id) {
    db.Post.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((user) => {
        res.json({ message: "Post deleted" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } else {
    res.status(403).json({
      message: "You can't delete this!",
    });
  }
});

module.exports = router;
