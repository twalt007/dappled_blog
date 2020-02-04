const router = require('express').Router();
const createRouter = require('./createPost');
const getAllRouter_admin = require('./getAllPosts_admin');
const getDetailsRouter_admin = require('./getPostDetails_admin');
const updateRouter = require('./updatePost');
const deleteRouter = require('./deletePost');

router.post('/new-post', createRouter);
router.get('/post-list/:userId', getAllRouter_admin);
router.get('/post-details/:postId', getDetailsRouter_admin);
router.update('/post-details/:postId', updateRouter);
router.delete('/post-list/:postId', deleteRouter);

module.exports = router;
