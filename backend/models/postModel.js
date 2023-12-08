const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Post must include a title.'],
      unique: true,
    },
    content: {
      type: String,
      required: [true, 'Post must include content'],
    },
    author: {
      type: String,
      required: [true, 'Post must include an author.'],
    },
    thumbnail: {
      type: String,
      required: [true, 'Post must include a thumbnail.'],
    },
  },
  { timestamps: true }
);
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
