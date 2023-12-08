const Post = require('./../models/postModel');

//get all blog posts, using GET method
exports.getPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    if (allPosts.length > 0) {
      res.status(200).json({
        status: 'success',
        data: {
          posts: allPosts,
        },
      });
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'No posts in DB',
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  }
};

//get a single blog post with the ID, using GET method
exports.getPost = async (req, res) => {
  try {
    const selectedPost = await Post.findById(req.params.id);
    if (selectedPost) {
      res.status(200).json({
        status: 'success',
        data: {
          post: selectedPost,
        },
      });
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'Document not found',
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  }
};

//create a new blog post, using POST method
exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        post: newPost,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: {
        err,
      },
    });
  }
};
exports.deletePost = async (req, res) => {
  try {
    const selectedPost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      message: 'Post deleted',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Post not found',
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const selectedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (selectedPost) {
      res.status(200).json({
        status: 'success',
        data: {
          updatedPost: selectedPost,
        },
      });
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'This document could not be found',
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  }
};
