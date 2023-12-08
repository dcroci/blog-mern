const express = require('express');
const router = express.Router();

const {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
} = require('./../controllers/postController');
//get requests
router.get('/', getPosts);
router.get('/:id', getPost);
//post request
router.post('/', createPost);
//delete request
router.delete('/:id', deletePost);
//patch request
router.patch('/:id', updatePost);

module.exports = router;
