const { Post } = require('../models');

const postData = [
  {
    title: 'Sequelize',
    content: 'Sequelize is a nifty npm package that handles your database, no more writing 32 lines of text for a JOIN.',
    user_id: 1,
  },
  {
    title: 'Handlebars',
    content: 'Handlebars is a very useful npm package that allows you to use templates in your code, now you can modularize your html and fix mistakes faster.',
    user_id: 2,
  },
  {
    title: 'Handlebars Partials',
    content: 'Partials are a handlebars feature where you can create a modular chunk of HTML code',
    user_id: 2,
  },
  {
    title: 'Sessions',
    content: 'When a user logs in, you can create a session for them using a package like Express-Session. This creates a cookie that authenticates the user, you can set a time limit for this cookie but the typical amount of time is two hours.',
    user_id: 3,
  },
  {
    title: 'Hashing',
    content: "Hashing lets you encrypt sensitive information. Remember: If a website shows you your password when you go to reset it, your password isn't being hashed and is stored in plaintext.",
    user_id: 4,
  },
  {
    title: 'Example',
    content: "example for editing",
    user_id: 1,
  },
  {
    title: 'Example',
    content: "example for deleting",
    user_id: 1,
  }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;