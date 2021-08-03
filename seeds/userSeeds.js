const { User } = require('../models');

const userData = [
  {
    username: "Nate",
    password: "password"
  },
  {
    username: "Jacob",
    password: "password"
  },
  {
    username: "Steve",
    password: "password"
  },
  {
    username: "Emma",
    password: "password"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;