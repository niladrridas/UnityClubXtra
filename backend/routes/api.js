const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define API routes
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
// Add more routes as needed

module.exports = router;
