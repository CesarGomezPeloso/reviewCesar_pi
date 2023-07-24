const { post } = require("../db");

const createdPost = async (title, body, userId) => {
  const newPost = await Post.create({ title, body });
  await newPost.setUser(userId);
  return newPost;
};

module.exports = { createdPost };
