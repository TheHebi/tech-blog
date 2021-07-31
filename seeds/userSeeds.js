const { User } = require('../models');

const userData = [
  {
    username: "Nate",
    email: "nate@nate.com",
    password: "password"
  },
  {
    username: "Jacob",
    email: "jacob@nate.com",
    password: "password"
  },
  {
    username: "Steve",
    email: "steve@nate.com",
    password: "password"
  },
  {
    username: "Emma",
    email: "emma@nate.com",
    password: "password"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;