const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Oh wow, I never knew you could write HTML in chunks and inject it with handlebars",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Sequelize made handling my database so much easier!",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "So that's why websites keep asking me about cookies!",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Don't tell the cookie monster about this!",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Don't forget you have to salt the password ass well when you encrypt it",
    post_id: 5,
    user_id: 4
  },
  {
    comment_text: "Remember folks, don't be like TARGET. Always hash your user's passwords!",
    post_id: 5,
    user_id: 4
  },
  {
    comment_text: "Example post for editing",
    post_id: 6,
    user_id: 1
  },
  {
    comment_text: "Example post for deleting",
    post_id: 7,
    user_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;