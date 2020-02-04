const router = require('express').Router();
const getAll_blog = require('./getAllPosts_blog');
const getDetails_blog = require('./getPostDetails_blog');

router.get('/post-list/:userId', getAll_blog);
router.get('/post-details/:postId', getDetails_blog);

module.exports = router;