const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User, Post, Comment } = require("../../models");

// get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get single user with posts and comments
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      include: [
        { model: Post, attributes: { excludes: [`createdAt`, `updatedAt`] } },
        { model: Comment, attributes: { exclude: [`createdAt`, `updatedAt`] } },
      ],
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// login
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (!user) {
      res.status(403).json({
        message: "incorrect username or password",
      });
    } else {
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (isPasswordCorrect) {
        req.session.user = {
          id: user.id,
          username: user.username,
          email: user.email,
          loggedIn: true,
        };
        res.json({ message: "You are logged in!" });
      } else {
        res.status(403).json({
          message: "incorrect username or password",
        });
      }
    }
  });
});

// logout
router.post("/logout", (req, res) => {
  if (req.session.user.loggedIn) {
    req.session.destroy(() => {
      res.status(204).json({ message: `Logged out!` }).end();
    });
  } else {
    res.status(404).end();
  }
});

// delete user
router.delete("/:id", (req, res) => {
  if (req.body.email === req.session.user.email) {
    User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((user) => {
        res.json({ message: "User deleted!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } else {
    res.status(403).json({
      message: "incorrect username or password",
    });
  }
});

module.exports = router;
