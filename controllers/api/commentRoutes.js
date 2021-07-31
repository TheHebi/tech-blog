const express = require("express");
const router = express.Router();
const db = require("../../models");

// get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await db.Comment.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get comment by id
router.get("/:id", async (req, res) => {
  try {
    const comment = await db.Comment.findOne({
      where: { id: req.params.id },
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(comment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// post comment
router.post("/", async (req, res) => {
  try {
    const newComment = await db.Comment.create(req.body);
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete comment
router.delete("/:id", (req, res) => {
    if (db.Comment.user_id === req.session.user.id) {
      db.Comment.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then((user) => {
          res.json({ message: "Comment deleted" });
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
